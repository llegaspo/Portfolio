import { Fragment, type ReactNode } from "react";
import { motion } from "framer-motion";

const DOMAIN_REGEX =
  /\b(?:https?:\/\/)?(?:www\.)?(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s]*)?/gi;

const SITE_PREVIEWS: Record<
  string,
  { title: string; image: string; label: string }
> = {
  "isupplyseo.com.au": {
    title: "iSupply SEO",
    image: "/isupplyseo.webp",
    label: "Live client website",
  },
  "scratchhq.au": {
    title: "Scratch HQ",
    image: "/scratchHQ.webp",
    label: "Live client website",
  },
  "getnifty.xyz": {
    title: "Get Nifty",
    image: "/getNifty.webp",
    label: "Live client website",
  },
};

const normalizeUrl = (value: string) =>
  value
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[),.;:!?]+$/, "")
    .replace(/\/$/, "");

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
        className="font-medium text-cyan-200 underline decoration-cyan-400/60 underline-offset-4 transition-colors hover:text-white"
      >
        {normalized}
      </a>

      {preview && (
        <span className="pointer-events-none absolute left-0 top-full z-30 mt-3 hidden w-64 overflow-hidden rounded-2xl border border-cyan-300/20 bg-gray-950/95 shadow-2xl shadow-black/50 transition-all duration-200 group-hover:block group-focus-within:block">
          <img
            src={preview.image}
            alt={preview.title}
            className="h-32 w-full object-cover"
          />
          <span className="block border-t border-white/10 p-3">
            <span className="block text-xs font-mono uppercase tracking-[0.18em] text-cyan-200">
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
  isLast = false,
}: {
  role: string;
  date: string;
  items: string[];
  company?: string;
  isLast?: boolean;
}) {
  return (
    <div className={`relative pl-10 ${isLast ? "" : "pb-12"}`}>
      <div className="absolute left-0 top-1 flex h-full w-5 justify-center">
        {!isLast ? (
          <>
            <div className="absolute top-5 -bottom-4 w-px bg-white/8" />
            <motion.div
              initial={{ scaleY: 0, opacity: 0.4 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-5 -bottom-4 w-px origin-top bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-500 shadow-[0_0_12px_rgba(103,232,249,0.45)]"
            />
          </>
        ) : null}

        <motion.div
          initial={{ scale: 0.85, opacity: 0.7 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/60 bg-gray-900"
        >
          <motion.div
            initial={{ scale: 0.3, opacity: 0.35 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="absolute h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="absolute h-5 w-5 rounded-full bg-cyan-300/18 blur-[4px]"
          />
        </motion.div>
      </div>

      <h3 className="text-gray-50 text-2xl font-bold mb-1">{role}</h3>
      {company && (
        <div className="text-cyan-200 font-mono text-sm mb-1">{company}</div>
      )}
      <p className="text-gray-500 text-sm mb-4 font-mono">{date}</p>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-gray-400 text-lg leading-relaxed flex items-start"
          >
            <span className="text-cyan-300 mr-2 mt-1.5 text-xs">▹</span>
            <span>{renderItemText(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
