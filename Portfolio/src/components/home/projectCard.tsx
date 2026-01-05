import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  tags,
}: {
  title: string;
  tags: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className="w-full p-6 bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-xl hover:border-violet-500/50 hover:bg-gray-900/80 transition-all duration-300 group cursor-default"
    >
      <div className="w-full text-gray-50 font-bold text-2xl mb-4 group-hover:text-violet-300 transition-colors">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
