import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type NavSection = { id: string; label: string };

interface NavProps {
  sections: NavSection[];
}

export default function Nav({ sections }: NavProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  // rootMargin biases the active band toward the upper third of the viewport,
  // so a section lights up as it settles under the bar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-ink-950">
      <nav className="mx-auto flex h-14 max-w-3xl items-center gap-6 overflow-x-auto px-6">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            className={`shrink-0 text-sm lowercase transition-colors ${
              active === id
                ? "text-accent-300"
                : "text-slate-500 hover:text-slate-200"
            }`}
          >
            {label}
          </a>
        ))}

        <div className="ml-auto flex shrink-0 gap-5">
          <Link
            to="/github"
            className="text-sm lowercase text-slate-500 transition-colors hover:text-slate-200"
          >
            github
          </Link>
          <Link
            to="/contact"
            className="text-sm lowercase text-slate-500 transition-colors hover:text-slate-200"
          >
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
