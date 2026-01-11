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

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

type Record = {
  id: string;
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
};

const PROJECTS: Record[] = [
  {
    id: "school-announcements",
    title: "What's UP",
    subtitle: "Dynamic Campus Information Hub",
    date: "March 2025 - Present",
    heroImage: "/announcementWebsite.png",
    description:
      "Applied internship learnings and software engineering skills to develop a dynamic system for school announcements. This platform replaces traditional bulletin boards with a digital, centralized hub, ensuring that critical academic updates, event schedules, and administrative news reach students in real-time.",
    features: [
      "Role-based dashboards (Admin vs Student)",
      "Real-time CRUD operations for announcements",
      "Category filtering and search",
      "Responsive design for mobile access",
    ],
    challenges:
      "Implementing a secure authentication system while maintaining ease of access for the student body was complex. I utilized JWT (JSON Web Tokens) for session management and applied software engineering best practices to decouple the frontend from the backend logic.",
    techStack: ["React", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/llegaspo/WhatsUP",
  },
  {
    id: "eduroad",
    title: "EduRoad",
    subtitle: "AI-Powered Educational Pathway App",
    date: "February 2025 - Present",
    heroImage: "/eduroad.png",
    description:
      "Developed during the Notion Hackathon at UP Cebu, EduRoad is a mobile application designed to guide students through their educational journeys. By integrating AI features and robust API functionalities, the app provides personalized learning roadmaps and resource recommendations.",
    features: [
      "AI-driven personalized learning paths",
      "Seamless API integration for resource fetching",
      "Cross-platform mobile UI",
      "Real-time progress tracking",
    ],
    challenges:
      "Integrating complex AI endpoints within the Flutter ecosystem while maintaining a responsive UI was challenging. We overcame this by optimizing API calls and using asynchronous state management to ensure a smooth user experience.",
    techStack: ["Flutter", "Android Studio", "Dart", "OpenAI API", "REST APIs"],
    githubUrl: "https://github.com/DripHard/EduRoad",
  },
  {
    id: "palengke",
    title: "PALengke",
    subtitle: "Cross-Platform Digital Marketplace",
    date: "July 2025 - Present",
    heroImage: "/PALengke.png",
    description:
      "PALengke is a React Native web application created during the IBPAP 'Can You HackIT?' challenge. It digitizes the traditional marketplace experience, allowing local vendors to reach a broader audience through a unified digital platform.",
    features: [
      "Cross-platform compatibility (Web & Mobile)",
      "Vendor inventory management",
      "Real-time order notifications",
      "Localized search filtering",
    ],
    challenges:
      "The primary hurdle was the strict time constraint of the hackathon. We had to prioritize core MVP features and utilize React Native's reusability to deploy a functional web application rapidly.",
    techStack: ["React Native", "TypeScript", "Node.js", "Firebase"],
    githubUrl: "https://github.com/llegaspo/PALengke",
  },
  {
    id: "trend-micro-ctf",
    title: "Trend Micro CTF",
    subtitle: "Cybersecurity Capture The Flag Challenge",
    date: "Trend Micro Competition",
    heroImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    description:
      "Competed in a high-stakes cybersecurity challenge hosted by Trend Micro. As a team of first-time participants, we navigated complex security puzzles, analyzing vulnerabilities and decrypting secure data to capture flags.",
    features: [
      "Network traffic analysis",
      "Cryptography and steganography solving",
      "Web vulnerability exploitation",
      "Forensic data recovery",
    ],
    challenges:
      "Lacking prior CTF experience, we faced a steep learning curve with advanced cryptographic challenges. We relied on rapid on-the-spot learning and strong teamwork to solve nearly all flags, outperforming many experienced teams.",
    techStack: [
      "Python",
      "Wireshark",
      "Linux/Kali",
      "Bash Scripting",
      "Burp Suite",
    ],
  },
  {
    id: "panday",
    title: "Panday",
    subtitle: "Informal Labor Connection Platform",
    date: "August 2025 - Present",
    heroImage: "/panday.png",
    description:
      "Recognized as a Top 25 Finalist in the Philippine Startup Challenge (Central Visayas), Panday is a web application that connects homeowners with informal service workers like plumbers and masons, bridging the gap in the gig economy.",
    features: [
      "Worker profile verification system",
      "Geolocation-based matching",
      "Service rating and review system",
      "Direct messaging interface",
    ],
    challenges:
      "Designing a system that builds trust between anonymous clients and informal workers was difficult. We implemented a verification logic and a transparent review system to ensure safety and reliability for both parties.",
    techStack: ["Vite", "Django", "TypeScript", "Supabase", "LLM"],
    githubUrl: "https://github.com/scharasyne/Panday",
  },
];

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => slugify(p.id) === id) || null;

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
    <div className="min-h-screen w-full bg-[#020204] text-gray-200 font-inter selection:bg-violet-500/30 pb-24 relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#0a0a0a] via-[#020204] to-black" />

        <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/20 via-transparent to-emerald-950/20 mix-blend-soft-light" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

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

        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
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

            <section>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <FaLayerGroup className="text-violet-500" /> The Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg font-light whitespace-pre-line">
                {project.description}
              </p>
            </section>

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

          <div className="space-y-8">
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

              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">
                  Development Timeline
                </h3>
                <div className="flex items-center gap-4 text-gray-200 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">In Progress</p>
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
