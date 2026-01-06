import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  id: string | number;
  title: string;
  description: string; // Added description for better preview
  tags: string[];
  image: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative h-full bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col"
      >
        {/* --- IMAGE SECTION --- */}
        <div className="relative h-48 overflow-hidden">
          {/* Overlay gradient to make text readable if you put text over image,
              or just to darken it slightly */}
          <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-all z-10" />

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />

          {/* Optional: "View Project" overlay badge */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
              View Details <FaArrowRight size={10} />
            </span>
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider font-mono bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/5 group-hover:border-violet-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
