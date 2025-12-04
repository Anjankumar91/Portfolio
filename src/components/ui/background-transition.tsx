/**
 * BACKGROUND COLOR TRANSITION COMPONENT
 * Transitions background color when entering different sections
 * Uses IntersectionObserver for performance
 */

import { motion } from "framer-motion";
import { useSectionBackground } from "@/hooks/use-scroll-effects";
import { ReactNode } from "react";

// Section color mapping - subtle variations to maintain dark theme
const SECTION_COLORS: Record<string, string> = {
  hero: "hsl(222 47% 11%)",
  about: "hsl(222 47% 10%)",
  skills: "hsl(220 45% 12%)",
  projects: "hsl(222 47% 11%)",
  certificates: "hsl(218 42% 13%)",
  dashboards: "hsl(222 47% 10%)",
  achievements: "hsl(220 45% 12%)",
  resume: "hsl(222 47% 11%)",
  contact: "hsl(218 42% 13%)",
};

interface BackgroundTransitionProps {
  children: ReactNode;
  className?: string;
}

export function BackgroundTransition({
  children,
  className = "",
}: BackgroundTransitionProps) {
  const backgroundColor = useSectionBackground(SECTION_COLORS);

  return (
    <motion.div
      className={`min-h-screen ${className}`}
      animate={{ backgroundColor }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
