import Chip from "./ui/chip";
import { Link } from "react-router-dom";
// 1. Import icons from react-icons/fa (Font Awesome)
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className="pt-6 flex px-6 flex-col md:w-[30vw] md:h-[85vh] bg-gray-800 rounded-3xl items-center shadow-2xl border border-gray-700">
      {/* --- PROFILE PICTURE BLOCK --- */}
      <div className="relative w-[90%] h-[50%] bg-zinc-600 rounded-3xl overflow-hidden group">
        <div className="w-full h-full bg-zinc-600" />{" "}
        {/* Replace with <img src="..." /> later */}
        {/* Floating: Open To Work */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-2 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            Open to work
          </span>
        </div>
        {/* Floating: Location */}
        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 shadow-lg">
          <p className="font-mono text-gray-200 text-xs flex items-center gap-1">
            <span className="text-red-400">📍</span> Cebu, PH
          </p>
        </div>
      </div>

      {/* --- NAME & ROLES --- */}
      <div className="text-3xl mx-[5%] mt-6 text-gray-50 font-bold font-inter text-center">
        Jed Lordy Legaspo
      </div>
      <div className="flex items-center mt-2 gap-4 text-gray-50 font-inter justify-center">
        <div className="flex items-center gap-2">
          <span className="text-violet-400 text-sm">&gt;</span>
          <span className="text-violet-400 text-sm">Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-violet-400 text-sm">&gt;</span>
          <span className="text-violet-400 text-sm">Technical Lead</span>
        </div>
      </div>

      <div className="h-4" />

      {/* --- BIO --- */}
      <p className="text-gray-400 text-sm text-center px-4 leading-relaxed">
        Building type-safe, scalable web architectures and AI-integrated
        backends. DOST Scholar @ UP Cebu. 1.36 Running GPA.
      </p>

      <div className="h-4" />

      {/* --- CHIPS --- */}
      <div className="flex flex-wrap justify-center gap-2 w-full px-2">
        <Chip text="TypeScript" />
        <Chip text="React" />
        <Chip text="C++" />
        <Chip text="PostgreSQL" />
        <Chip text="Firebase" />
      </div>

      <div className="flex-1" />

      {/* --- SOCIALS (Fixed Alignment & Icons) --- */}
      <div className="flex justify-center w-full mt-4 pb-8">
        {/* ADDED: flex, items-center, gap-6 to align horizontally */}
        <nav className="flex items-center gap-9">
          {/* GitHub: Points to your internal page */}
          <Link
            to="/github"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            title="View GitHub Stats"
          >
            <FaGithub size={50} />
          </Link>

          {/* LinkedIn: External Link (Change url to yours) */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#0077b5] hover:scale-110 transition-all duration-300"
            title="LinkedIn"
          >
            <FaLinkedin size={50} />
          </a>

          {/* Email: Mailto Action */}
          <Link
            to="/contact"
            className="text-gray-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300"
            title="Email Me"
          >
            <FaEnvelope size={50} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
