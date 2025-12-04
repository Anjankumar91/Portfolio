/**
 * SCROLL ANIMATION WRAPPER COMPONENTS
 * Provides easy-to-use animation wrappers for scroll effects
 * Includes: FadeIn, SlideIn, TiltCard, ParallaxWrapper
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView, useTiltOnScroll } from "@/hooks/use-scroll-effects";
import { useRef, ReactNode } from "react";

// ============================================
// FADE-IN ON SCROLL COMPONENT
// ============================================
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
}: FadeInProps) {
  const { ref, isInView } = useInView();

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40, x: 0 };
      case "down": return { y: -40, x: 0 };
      case "left": return { x: 40, y: 0 };
      case "right": return { x: -40, y: 0 };
      case "none": return { x: 0, y: 0 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : { opacity: 0, ...initial, filter: "blur(10px)" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SLIDE-IN ON SCROLL COMPONENT
// For project cards and images with left/right animations
// ============================================
interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
  distance?: number;
}

export function SlideIn({
  children,
  className = "",
  delay = 0,
  direction = "left",
  distance = 100,
}: SlideInProps) {
  const { ref, isInView } = useInView();
  const xOffset = direction === "left" ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: xOffset, rotateY: direction === "left" ? -10 : 10 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: xOffset, rotateY: direction === "left" ? -10 : 10 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// 3D TILT CARD ON SCROLL COMPONENT
// Creates 3D tilt effect based on scroll position
// ============================================
interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 10,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [maxTilt, 0, -maxTilt]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        rotateX,
        scale,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// PARALLAX WRAPPER COMPONENT
// For hero section parallax background effect
// ============================================
interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxWrapper({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed * multiplier]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CONTAINER COMPONENT
// Staggers children animations
// ============================================
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0,
}: StaggerContainerProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER ITEM COMPONENT
// Used inside StaggerContainer
// ============================================
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SCALE ON SCROLL COMPONENT
// Scales element as it enters viewport
// ============================================
interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleOnScroll({
  children,
  className = "",
  delay = 0,
}: ScaleOnScrollProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
