import { Link } from "react-router-dom";
import { PROFILE } from "../../data/portfolio";

const LINKS = [
  { label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "linkedin", href: PROFILE.linkedinUrl },
  { label: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/8 py-10">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="font-mono text-xs text-slate-500 transition-colors hover:text-accent-300"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex gap-5 font-mono text-xs text-slate-600">
          <Link to="/resume" className="transition-colors hover:text-slate-300">
            résumé
          </Link>
          <Link to="/github" className="transition-colors hover:text-slate-300">
            github
          </Link>
          <Link to="/contact" className="transition-colors hover:text-slate-300">
            contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
