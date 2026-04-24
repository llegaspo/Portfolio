import { Fragment, type ReactNode } from "react";

const DOMAIN_REGEX =
  /\b(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?/gi;

const SITE_PREVIEWS: Record<
  string,
  { title: string; image: string; label: string }
> = {
  "isupplyseo.com.au": {
    title: "iSupply SEO",
    image: "/isupplyseo.png",
    label: "Live client website",
  },
  "scratchhq.au": {
    title: "Scratch HQ",
    image: "/scratchHQ.png",
    label: "Live client website",
  },
  "getnifty.xyz": {
    title: "Get Nifty",
    image: "/getNifty.png",
    label: "Live client website",
  },
};

const normalizeUrl = (value: string) =>
  value.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

const toHref = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

function WebsiteLink({ value }: { value: string }) {
  const normalized = normalizeUrl(value);
  const preview = SITE_PREVIEWS[normalized];

  return (
    <span className="group relative inline-flex">
      <a
        href={toHref(value)}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-violet-300 underline decoration-violet-500/60 underline-offset-4 transition-colors hover:text-white"
      >
        {normalized}
      </a>

      {preview && (
        <span className="pointer-events-none absolute left-0 top-full z-30 mt-3 hidden w-64 overflow-hidden rounded-2xl border border-violet-400/20 bg-gray-950/95 shadow-2xl shadow-black/50 transition-all duration-200 group-hover:block group-focus-within:block">
          <img
            src={preview.image}
            alt={preview.title}
            className="h-32 w-full object-cover"
          />
          <span className="block border-t border-white/10 p-3">
            <span className="block text-xs font-mono uppercase tracking-[0.18em] text-violet-300">
              {preview.label}
            </span>
            <span className="mt-1 block text-sm font-semibold text-white">
              {preview.title}
            </span>
            <span className="mt-1 block text-xs text-gray-400">
              {normalized}
            </span>
          </span>
        </span>
      )}
    </span>
  );
}

function renderItemText(text: string) {
  const matches = Array.from(text.matchAll(DOMAIN_REGEX));

  if (matches.length === 0) {
    return text;
  }

  const parts: Array<string | ReactNode> = [];
  let lastIndex = 0;

  matches.forEach((match, index) => {
    const found = match[0];
    const start = match.index ?? 0;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    parts.push(<WebsiteLink key={`${found}-${index}`} value={found} />);
    lastIndex = start + found.length;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.map((part, index) =>
    typeof part === "string" ? (
      <Fragment key={index}>{part}</Fragment>
    ) : (
      part
    ),
  );
}

export default function ExperienceItem({
  role,
  date,
  items,
  company,
}: {
  role: string;
  date: string;
  items: string[];
  company?: string;
}) {
  return (
    <div className="mb-12 relative">
      <div className="absolute -left-[39px] md:-left-[41px] top-2 w-4 h-4 bg-gray-900 border-2 border-violet-500 rounded-full" />
      <h3 className="text-gray-50 text-2xl font-bold mb-1">{role}</h3>
      {company && (
        <div className="text-violet-400 font-mono text-sm mb-1">{company}</div>
      )}
      <p className="text-gray-500 text-sm mb-4 font-mono">{date}</p>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-gray-400 text-lg leading-relaxed flex items-start"
          >
            <span className="text-violet-500 mr-2 mt-1.5 text-xs">▹</span>
            <span>{renderItemText(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
