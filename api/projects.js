console.log("Projects file loaded!");
import dbConnect from './db';
import { Project } from './models';

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
