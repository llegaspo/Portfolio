import { Fragment, type ReactNode } from "react";

const SITE_PREVIEWS: Record<string, { title: string; image: string }> = {
  "isupplyseo.com.au": { title: "iSupply SEO", image: "/isupplyseo.webp" },
  "isupplyelectrical.com.au": {
    title: "iSupply Electrical",
    image: "/isupplyelectrical.webp",
  },
  "scratchhq.au": { title: "Scratch HQ", image: "/scratchHQ.webp" },
  "bigliftcrane.com.au": { title: "Big Lift Crane", image: "/bigliftcrane.webp" },
  "getnifty.xyz": { title: "Get Nifty", image: "/getNifty.webp" },
};

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Built from the known-site list rather than a generic domain pattern — a
// generic one also swallows library names like "Next.js" and turns them into
// dead links.
const DOMAIN_REGEX = new RegExp(
  `\\b(?:https?://)?(?:www\\.)?(?:${Object.keys(SITE_PREVIEWS)
    .map(escapeRegex)
    .join("|")})(?:/[^\\s]*)?`,
  "gi",
);

const normalizeUrl = (value: string) =>
  value
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[),.;:!?]+$/, "")
    .replace(/\/$/, "");

function WebsiteLink({ value }: { value: string }) {
  const normalized = normalizeUrl(value);
  const preview = SITE_PREVIEWS[normalized];

  return (
    <span className="group relative inline-flex">
      <a
        href={`https://${normalized}`}
        target="_blank"
        rel="noreferrer"
        className="text-accent-300 underline decoration-accent-400/40 underline-offset-4 transition-colors hover:text-white"
      >
        {normalized}
      </a>

      {preview && (
        <span className="pointer-events-none absolute left-0 top-full z-30 mt-2 hidden w-56 overflow-hidden rounded-lg border border-white/12 bg-ink-950 group-hover:block">
          <img
            src={preview.image}
            alt={preview.title}
            className="h-28 w-full border-b border-white/8 object-cover object-top"
          />
          <span className="block px-3 py-2 font-mono text-[11px] text-slate-400">
            {normalized}
          </span>
        </span>
      )}
    </span>
  );
}

function renderItemText(text: string) {
  const matches = Array.from(text.matchAll(DOMAIN_REGEX));
  if (matches.length === 0) return text;

  const parts: Array<string | ReactNode> = [];
  let lastIndex = 0;

  matches.forEach((match, index) => {
    const found = match[0];
    const start = match.index ?? 0;

    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(<WebsiteLink key={`${found}-${index}`} value={found} />);
    lastIndex = start + found.length;
  });

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return parts.map((part, index) =>
    typeof part === "string" ? <Fragment key={index}>{part}</Fragment> : part,
  );
}

export default function ExperienceItem({
  role,
  company,
  monogram,
  date,
  items,
  stack,
  roleAsHeading = false,
  isLast = false,
}: {
  role: string;
  company?: string;
  monogram: string;
  date: string;
  items: string[];
  stack?: string[];
  roleAsHeading?: boolean;
  isLast?: boolean;
}) {
  const heading = roleAsHeading ? role : (company ?? role);
  const subheading = roleAsHeading ? company : company && role;
  return (
    <div className={`relative flex gap-5 ${isLast ? "" : "pb-10"}`}>
      {/* Monogram marker + connecting rail */}
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-ink-900 font-mono text-[11px] font-medium text-accent-300">
          {monogram}
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-white/8" />}
      </div>

      <div className="min-w-0 flex-1 pt-1">
        <p className="font-mono text-xs text-slate-500">{date}</p>

        <h3 className="mt-1 font-semibold text-white">{heading}</h3>
        {subheading && <p className="text-sm text-slate-400">{subheading}</p>}

        {stack && stack.length > 0 && (
          <p className="mt-2 font-mono text-[11px] text-slate-600">
            {stack.join(" · ")}
          </p>
        )}

        <ul className="mt-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex text-sm leading-relaxed text-slate-400">
              <span aria-hidden="true" className="mr-3 text-slate-600">
                &bull;
              </span>
              <span>{renderItemText(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
