import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";
import { PROJECTS } from "../data/portfolio";

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((entry) => slugify(entry.id) === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.08]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#07111f] p-6 text-center text-slate-100">
        <h1 className="text-4xl font-semibold text-white">Project Not Found</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
          This case study is either unavailable or meant to link directly to a
          live site.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] pb-24 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_26%),linear-gradient(180deg,#07111f,#0f172a)]" />

      <div className="relative z-10">
        <div className="relative h-[58vh] overflow-hidden border-b border-white/10">
          <div className="absolute left-6 top-8 z-30 lg:left-12">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/45 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-slate-950/70"
            >
              <FaArrowLeft />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Back
              </span>
            </button>
          </div>

          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.3),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.24),transparent_24%),linear-gradient(180deg,#07111f,#111827)]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/60 to-transparent" />
          </motion.div>

          <div className="absolute bottom-0 left-0 w-full px-6 pb-12 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <span className="inline-block rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                {project.category}
              </span>
              <h1 className="mt-5 text-5xl font-semibold leading-none tracking-tight text-white md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-200">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 lg:grid-cols-3 lg:px-12">
          <div className="space-y-14 lg:col-span-2">
            <div className="flex flex-wrap gap-4 border-b border-white/10 pb-10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:bg-white/10"
                >
                  <FaGithub className="text-lg text-slate-200" />
                  <div>
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">
                      Repository
                    </span>
                    <span className="block font-medium text-white">
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
                  className="flex items-center gap-3 rounded-2xl bg-cyan-300 px-6 py-4 text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <div>
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-700">
                      Live Site
                    </span>
                    <span className="block font-semibold">Visit Project</span>
                  </div>
                </a>
              )}
            </div>

            <section>
              <h2 className="mb-8 flex items-center gap-3 text-3xl font-semibold text-white">
                <FaLayerGroup className="text-cyan-200" />
                Overview
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                {project.description}
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="mb-8 text-2xl font-semibold text-white">
                Key Contributions
              </h2>
              <ul className="grid gap-5 md:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-amber-300/20 bg-amber-300/5 p-8 backdrop-blur-xl">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
                <FaLightbulb className="text-amber-200" />
                Challenges And Insights
              </h2>
              <p className="border-l-2 border-amber-200/30 pl-5 text-lg italic leading-8 text-slate-200">
                {project.challenges}
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_24px_80px_rgba(3,10,24,0.35)] backdrop-blur-2xl">
              <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold text-white">
                <FaTools className="text-cyan-200" />
                Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Timeline
                </h3>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-100">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Project Window
                    </p>
                    <p className="mt-1 font-medium text-white">{project.date}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Role
                </h3>
                <p className="text-base leading-7 text-slate-300">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
