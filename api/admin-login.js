import { createHmac } from 'crypto';

function makeToken(secret) {
  const ts = Date.now().toString();
  const sig = createHmac('sha256', secret).update(ts).digest('hex');
  return `${ts}.${sig}`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { password } = req.body || {};
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = makeToken(process.env.ADMIN_SECRET);
  return res.status(200).json({ token });
}
