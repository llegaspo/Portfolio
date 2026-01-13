import mongoose from 'mongoose';


const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: String,
  date: String,
  heroImage: String,
  description: String,
  features: [String],
  challenges: String,
  techStack: [String],
  githubUrl: String,
  liveUrl: String,
}, { collection: 'Github_Projects' });

const CompetitionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  role: String,
  result: String,
  shortDesc: String,
  fullDesc: String,
  image: String,
  projectId: String,
}, { collection: 'Competitions' });

export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export const Competition = mongoose.models.Hackathon || mongoose.model('Competition', CompetitionSchema);
