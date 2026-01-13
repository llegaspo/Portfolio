console.log("Com loaded");
import dbConnect from './db.js';
import { Competition } from './models.js';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const competitions = await Competition.find({});
    res.status(200).json(competitions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch competitions' });
  }
}
