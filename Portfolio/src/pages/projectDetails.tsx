import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaTools,
  FaLightbulb,
  FaLayerGroup,
  FaArrowLeft,
} from "react-icons/fa";

// --- MOCK DATABASE (Keep your data here) ---
const PROJECTS: Record<
  string,
  {
    title: string;
    subtitle: string;
    date: string;
    heroImage: string;
    description: string;
    features: string[];
    challenges: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
  }
> = {
  "automated-drone": {
    title: "Automated Surveillance Drone",
    subtitle: "AI-Powered Autonomous Flight System",
    date: "Dec 2025",
    heroImage:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop",
    description:
      "This project involves the development of a fully autonomous drone capable of navigating complex environments without GPS. Using computer vision and SLAM (Simultaneous Localization and Mapping), the drone can identify targets, avoid obstacles, and return to base automatically.",
    features: [
      "Real-time object detection using YOLOv8",
      "GPS-denied navigation via Optical Flow",
      "Automatic battery swapping mechanism logic",
      "Encrypted video stream transmission",
    ],
    challenges:
      "The biggest challenge was optimizing the computer vision model to run on the limited hardware of a Raspberry Pi. I solved this by quantizing the model and offloading heavy processing to a ground station.",
    techStack: ["Python", "OpenCV", "C++", "Raspberry Pi", "TensorFlow"],
    githubUrl: "https://github.com/yourusername/drone-project",
    liveUrl: "https://youtube.com/demo-video",
  },
  "portfolio-v1": {
    title: "Futuristic Portfolio",
    subtitle: "React & Framer Motion Personal Website",
    date: "Jan 2026",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    description:
      "A high-performance personal portfolio website designed to showcase projects with a modern, glassmorphism aesthetic. Built with React, TypeScript, and Tailwind CSS, featuring smooth page transitions and interactive 3D elements.",
    features: [
      "Dynamic Routing for project case studies",
      "Custom Glassmorphism UI components",
      "Fully responsive mobile design",
      "Integrated EmailJS contact form",
    ],
    challenges:
      "Achieving 60fps animations while using heavy blur effects was tricky. I utilized CSS hardware acceleration and Framer Motion's layout animations to ensure smooth performance on all devices.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/yourusername/portfolio",
  },
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? PROJECTS[id] : null;
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020204] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden font-inter">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px] animate-pulse" />
        <h1 className="text-4xl font-bold text-white mb-4 relative z-10">
          Project Not Found
        </h1>
        <Link
          to="/"
          className="relative z-10 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 font-mono"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          RETURN_TO_BASE
        </Link>
      </div>
    );
  }

  return (
    // FIX 1: Changed background to solid black here.
    // The gradient is now handled in the "fixed" layer below so it doesn't scroll away.
    <div className="min-h-screen w-full bg-[#020204] text-gray-200 font-inter selection:bg-violet-500/30 pb-24 relative overflow-x-hidden">
      {/* === COMPLEX BACKGROUND LAYER (FIXED POSITION) === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* FIX 2: Moved the Radial Gradient here and made it FIXED so it covers the whole screen always */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#0a0a0a] via-[#020204] to-black" />

        {/* 1. Subtle Gradient Wash Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/20 via-transparent to-emerald-950/20 mix-blend-soft-light" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70" />

        {/* 2. Cyberpunk Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* 3. Animated Gradients Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-violet-600/30 to-fuchsia-800/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-emerald-600/20 to-cyan-800/20 rounded-full blur-[128px]"
        />

        {/* 4. Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
          {/* Back button */}
          <div className="absolute top-8 left-6 lg:left-12 z-30">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/50"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Back
              </span>
            </button>
          </div>

          {/* Hero Image */}
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/70 to-transparent" />
          </motion.div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 z-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md text-violet-300 font-mono text-xs uppercase tracking-wider mb-4"
            >
              Project Case Study
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow-md"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-16">
            {/* Links */}
            <div className="flex flex-wrap gap-4 pb-10 border-b border-white/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-violet-500/50 hover:bg-white/5 transition-all group"
                >
                  <FaGithub className="text-xl text-gray-400 group-hover:text-white transition-colors" />
                  <div>
                    <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">
                      Repository
                    </span>
                    <span className="block text-sm font-bold text-gray-200 group-hover:text-white">
                      View Source Code
                    </span>
                  </div>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-700 to-indigo-700 text-white rounded-2xl hover:from-violet-600 hover:to-indigo-600 shadow-lg shadow-violet-900/30 transition-all hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-xl" />
                  <div>
                    <span className="block text-xs text-violet-200 font-mono uppercase tracking-wider mb-1">
                      Deployment
                    </span>
                    <span className="block text-sm font-bold">
                      Launch Live Demo
                    </span>
                  </div>
                </a>
              )}
            </div>

            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <FaLayerGroup className="text-violet-500" /> The Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg font-light whitespace-pre-line">
                {project.description}
              </p>
            </section>

            {/* Key Features */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/10 to-transparent opacity-50 pointer-events-none" />

              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 relative z-10">
                Key Capabilities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-300 group transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/30 group-hover:bg-violet-500 group-hover:text-white transition-all">
                      <span className="w-2 h-2 rounded-full bg-violet-400 group-hover:bg-white transition-all"></span>
                    </div>
                    <span className="leading-relaxed pt-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-500/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none"></div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <FaLightbulb className="text-amber-500" /> Challenges & Insights
              </h2>
              <div className="relative z-10 pl-6 border-l-2 border-amber-500/30">
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "{project.challenges}"
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl sticky top-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-70" />

              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <FaTools className="text-violet-400" /> Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:border-violet-500/50 hover:bg-violet-600/20 hover:text-white transition-all cursor-default shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">
                  Development Timeline
                </h3>
                <div className="flex items-center gap-4 text-gray-200 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Completed</p>
                    <p className="font-bold text-lg tracking-tight">
                      {project.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
