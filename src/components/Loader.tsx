import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const duration = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col justify-between p-6 md:p-10"
        >
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span>Ghabhi</span>
            <span>2026</span>
          </div>
          <div className="text-center">
            <p className="font-display text-[15vw] md:text-[12vw] leading-none tracking-[-0.04em] tabular-nums">
              {String(progress).padStart(3, "0")}
            </p>
          </div>
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span>Loading Experience</span>
            <span>{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
