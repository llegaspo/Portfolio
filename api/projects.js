console.log("Projects file loaded!");
import dbConnect from './db.js';
import { Project } from './models.js';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.log("proj err", error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}
