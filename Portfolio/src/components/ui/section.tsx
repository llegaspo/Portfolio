import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <section className="mb-24 relative">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        <h2 className="text-violet-400 mb-8 text-4xl font-extrabold font-['JetBrains_Mono']">
          {title}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: delay + 0.0, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
