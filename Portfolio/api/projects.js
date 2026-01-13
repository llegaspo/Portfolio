import dbConnect from './dbConnect';
import { Project } from './models';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}
