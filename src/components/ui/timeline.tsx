/**
 * VERTICAL TIMELINE SCROLL ANIMATION COMPONENT
 * Animated timeline for experience/resume section
 * Each item animates in as it enters the viewport
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-scroll-effects";
import { ReactNode, useRef } from "react";

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  icon?: ReactNode;
  date?: string;
  isLast?: boolean;
}

export function TimelineItem({
  children,
  className = "",
  index = 0,
  icon,
  date,
  isLast = false,
}: TimelineItemProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-4 md:gap-8 ${className}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        {/* Dot with glow effect */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border-2 border-primary"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          {icon && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              {icon}
            </motion.span>
          )}
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            initial={{ scale: 1, opacity: 0 }}
            animate={isInView ? { scale: 1.5, opacity: [0, 0.5, 0] } : { scale: 1, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              repeat: 0,
            }}
          />
        </motion.div>
        
        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-0.5 bg-gradient-to-b from-primary to-primary/20 flex-1 min-h-[60px]"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {date && (
          <motion.span
            className="inline-block text-sm text-primary font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            {date}
          </motion.span>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
