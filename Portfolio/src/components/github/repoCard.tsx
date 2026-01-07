import { formatDate } from "../../utils/helper";
import { motion } from "framer-motion";

export type Repository = {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
};

export default function RepoCard({
  repo,
  index,
}: {
  repo: Repository;
  index: number;
}) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
      className="group relative flex flex-col h-full p-6 rounded-2xl overflow-hidden transition-all duration-300
    bg-gray-900/40 backdrop-blur-md border border-white/5 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
            {repo.name}
          </h3>
          <div className="flex items-center gap-3 text-gray-400 text-xs font-mono bg-black/20 px-2 py-1 rounded-full">
            {repo.stargazerCount > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span>{repo.stargazerCount}</span>
              </div>
            )}
            {repo.forkCount > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-gray-400">⑂</span>
                <span>{repo.forkCount}</span>
              </div>
            )}
            {repo.stargazerCount === 0 && repo.forkCount === 0 && (
              <span>-</span>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
          {repo.description || "No description provided."}
        </p>

        <div className="mt-auto flex items-center justify-between text-xs pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            {repo.primaryLanguage ? (
              <>
                <span
                  className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: repo.primaryLanguage.color }}
                />
                <span className="text-gray-300 font-medium">
                  {repo.primaryLanguage.name}
                </span>
              </>
            ) : (
              <span className="text-gray-600 italic">No language</span>
            )}
          </div>
          <span className="text-gray-500">{formatDate(repo.updatedAt)}</span>
        </div>
      </div>
    </motion.a>
  );
}
