import { Link, useLocation } from "react-router-dom";

const PAGES = [
  { to: "/github", label: "github" },
  { to: "/resume", label: "résumé" },
  { to: "/contact", label: "contact" },
];

/**
 * Shared header for the sub-pages. Keeps /github, /resume, and /contact
 * reachable from each other instead of every page being a dead end back home.
 */
export default function PageHeader() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-ink-950">
      <nav className="mx-auto flex h-14 max-w-3xl items-center gap-6 px-6">
        <Link
          to="/"
          className="text-sm lowercase text-slate-400 transition-colors hover:text-white"
        >
          ← back
        </Link>

        <div className="ml-auto flex gap-5">
          {PAGES.filter((page) => page.to !== pathname).map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="text-sm lowercase text-slate-500 transition-colors hover:text-slate-200"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
