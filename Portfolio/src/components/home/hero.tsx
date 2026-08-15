import { Link } from "react-router-dom";
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "../ui/typewriter";
import { METRICS, PROFILE } from "../../data/portfolio";

/** Internal routes render as <Link>; only LinkedIn leaves the site. */
const ICON_LINKS = [
  { icon: FaGithub, label: "GitHub activity", to: "/github" },
  { icon: FaLinkedin, label: "LinkedIn", href: PROFILE.linkedinUrl },
  { icon: FaEnvelope, label: "Send me a message", to: "/contact" },
] as const;

const ICON_CLASS =
  "rounded-md border border-white/12 p-3 text-slate-400 transition-colors hover:border-white/30 hover:text-white";

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-10">
      <h1 className="text-display font-bold lowercase text-white">
        {PROFILE.name}
      </h1>

      <div className="mt-4 flex items-baseline font-mono text-lg text-accent-300 sm:text-xl">
        <span className="mr-2 select-none text-accent-500">&gt;</span>
        <Typewriter phrases={PROFILE.roles} />
      </div>

      <p className="mt-3 text-slate-500">
        {PROFILE.location} · {PROFILE.status.toLowerCase()}
      </p>

      <p className="mt-8 max-w-xl leading-relaxed text-slate-400">
        {PROFILE.headline}
      </p>

      <p className="mt-6 font-medium text-white">
        Let&rsquo;s build something together
        <FaArrowDown className="ml-2 inline -rotate-45" size={13} />
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <Link
          to="/resume"
          className="rounded-md border border-white/12 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
        >
          Résumé
        </Link>

        {ICON_LINKS.map((link) =>
          "to" in link ? (
            <Link
              key={link.label}
              to={link.to}
              aria-label={link.label}
              title={link.label}
              className={ICON_CLASS}
            >
              <link.icon size={15} />
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              target="_blank"
              rel="noreferrer"
              className={ICON_CLASS}
            >
              <link.icon size={15} />
            </a>
          ),
        )}
      </div>

      <p className="mt-10 font-mono text-xs leading-relaxed text-slate-600">
        {METRICS.map((metric) => `${metric.value} ${metric.short}`).join("  ·  ")}
      </p>
    </section>
  );
}
