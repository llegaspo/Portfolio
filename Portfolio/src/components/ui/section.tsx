import type { ReactNode } from "react";

interface SectionProps {
  /** Anchor target for nav scroll-spy. */
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 py-14">
      <h2
        id={headingId}
        className="mb-8 text-sm font-semibold lowercase text-white"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
