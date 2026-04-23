import { createHmac } from 'crypto';

function verifyToken(token, secret) {
  if (!token) return false;
  const [ts, sig] = token.split('.');
  if (!ts || !sig) return false;
  // Expire tokens after 12 hours
  if (Date.now() - parseInt(ts) > 12 * 60 * 60 * 1000) return false;
  const expected = createHmac('sha256', secret).update(ts).digest('hex');
  return sig === expected;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!verifyToken(token, process.env.ADMIN_SECRET)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const getRes = await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    if (!getRes.ok) throw new Error(`Gist read failed: ${getRes.status}`);
    const gist = await getRes.json();
    const submissions = JSON.parse(gist.files['submissions.json'].content || '[]');

    if (req.method === 'DELETE') {
      const { id } = req.query;
      const filtered = submissions.filter(s => s.id !== id);
      await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
        method: 'PATCH',
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          files: { 'submissions.json': { content: JSON.stringify(filtered, null, 2) } },
        }),
      });
      return res.status(200).json({ success: true });
    }

    return res.status(200).json({ submissions, total: submissions.length });
  } catch (err) {
    console.error('Submissions error:', err);
    return res.status(500).json({ error: 'Failed to fetch submissions' });
  }
}
