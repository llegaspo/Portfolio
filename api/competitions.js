console.log("Competitions file loaded!");
import dbConnect from './db';
import { Competition } from './models';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const competitions = await Competition.find({});
    res.status(200).json(competitions);
  } catch (error) {
    console.log("Compe er", error);
    res.status(500).json({ error: 'Failed to fetch competitions' });
  }
}
