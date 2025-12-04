/**
 * SCROLL PROGRESS BAR COMPONENT
 * Displays a progress bar at the top of the page that fills as user scrolls
 * Uses the useScrollProgress hook for performance
 */

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-effects";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-muted/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Progress fill with gradient */}
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
      {/* Glow effect at the end of the bar */}
      <motion.div
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"
        style={{ left: `calc(${progress}% - 40px)` }}
      />
    </motion.div>
  );
}
