export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { sheetId, range, metaOnly } = req.query;

  if (!sheetId) return res.status(400).json({ error: 'Missing sheetId parameter' });

  try {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (metaOnly === 'true') {
      const metaRes = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${apiKey}`
      );
      const data = await metaRes.json();
      if (!metaRes.ok) return res.status(metaRes.status).json({ error: data?.error?.message || 'Sheets API error' });
      return res.status(200).json(data);
    }

    const r = range || 'A1:Z200';
    const dataRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(r)}?key=${apiKey}`
    );
    const data = await dataRes.json();
    if (!dataRes.ok) return res.status(dataRes.status).json({ error: data?.error?.message || 'Sheets API error' });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
