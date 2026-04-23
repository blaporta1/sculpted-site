export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, state, answers } = req.body || {};
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: (phone || '').trim(),
    state: (state || '').trim(),
    answers: answers || {},
    submittedAt: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '',
  };

  try {
    // Read current gist
    const getRes = await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    if (!getRes.ok) throw new Error(`Gist read failed: ${getRes.status}`);
    const gist = await getRes.json();
    const current = JSON.parse(gist.files['submissions.json'].content || '[]');

    // Append new submission
    current.unshift(submission); // newest first

    // Write back
    const patchRes = await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        files: { 'submissions.json': { content: JSON.stringify(current, null, 2) } },
      }),
    });
    if (!patchRes.ok) throw new Error(`Gist write failed: ${patchRes.status}`);

    return res.status(200).json({ success: true, id: submission.id });
  } catch (err) {
    console.error('Submit error:', err);
    return res.status(500).json({ error: 'Failed to save submission' });
  }
}
