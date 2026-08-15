import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  domain?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  techStack,
  image,
  domain,
}: ProjectCardProps) {
  return (
    <Link
      to={`/project/${id}`}
      className="group block overflow-hidden rounded-lg border border-white/10 transition-colors hover:border-white/25"
    >
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          loading="lazy"
          className="aspect-16/10 w-full border-b border-white/8 object-cover object-top"
        />
      )}

      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          {domain && (
            <span className="shrink-0 font-mono text-[10px] text-slate-600">
              {domain}
            </span>
          )}
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <p className="mt-3 font-mono text-[11px] text-slate-600">
          {techStack.slice(0, 4).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
