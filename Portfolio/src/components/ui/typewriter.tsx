import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  /** How long a fully typed phrase stays on screen before deleting. */
  holdMs?: number;
  /** Pause after deleting, before the next phrase starts. */
  gapMs?: number;
  className?: string;
  caretClassName?: string;
}

/**
 * Types each phrase, holds, deletes, then advances to the next one.
 * With `prefers-reduced-motion` the first phrase renders statically and the
 * caret stops blinking.
 */
export default function Typewriter({
  phrases,
  typeSpeed = 65,
  deleteSpeed = 32,
  holdMs = 1900,
  gapMs = 420,
  className = "",
  caretClassName = "",
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) return;

    const current = phrases[index % phrases.length];

    // Fully typed — hold, then start deleting.
    if (!deleting && text === current) {
      timer.current = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(timer.current);
    }

    // Fully deleted — brief gap, then advance.
    if (deleting && text === "") {
      timer.current = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, gapMs);
      return () => clearTimeout(timer.current);
    }

    timer.current = setTimeout(
      () =>
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        ),
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timer.current);
  }, [
    text,
    deleting,
    index,
    phrases,
    typeSpeed,
    deleteSpeed,
    holdMs,
    gapMs,
    reduceMotion,
  ]);

  const longest = phrases.reduce(
    (acc, phrase) => (phrase.length > acc.length ? phrase : acc),
    "",
  );

  return (
    <span className={className}>
      {/* Reserve the widest phrase so the line never reflows mid-type. */}
      <span className="relative inline-block">
        <span aria-hidden="true" className="invisible whitespace-pre">
          {longest}
        </span>
        <span className="absolute left-0 top-0 whitespace-pre">
          <span aria-live="polite">{reduceMotion ? phrases[0] : text}</span>
          {/* Solid block caret. */}
          <span
            aria-hidden="true"
            className={`ml-1 inline-block w-[0.6ch] translate-y-[0.12em] bg-current ${
              reduceMotion ? "" : "animate-caret"
            } ${caretClassName}`}
            style={{ height: "0.95em" }}
          />
        </span>
      </span>
    </span>
  );
}
