import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <Reveal className="max-w-2xl mb-12">
      <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary mb-3">{kicker}</p>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>}
    </Reveal>
  );
}
