/**
 * TEXT REVEAL ON SCROLL COMPONENT
 * Reveals text word-by-word or line-by-line as user scrolls
 * Uses IntersectionObserver for performance
 */

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-scroll-effects";

interface TextRevealProps {
  children: string;
  className?: string;
  /** Animation type: word-by-word or line-by-line */
  type?: "word" | "line" | "character";
  /** Delay between each word/line reveal */
  staggerDelay?: number;
  /** Initial delay before animation starts */
  delay?: number;
  /** HTML tag to render */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  children,
  className = "",
  type = "word",
  staggerDelay = 0.05,
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  // Split text based on type
  const getItems = () => {
    switch (type) {
      case "character":
        return children.split("");
      case "line":
        return children.split("\n");
      case "word":
      default:
        return children.split(" ");
    }
  };

  const items = getItems();

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ 
            marginRight: type === "word" ? "0.25em" : type === "character" ? "0" : "0",
            whiteSpace: type === "line" ? "pre-line" : "normal",
          }}
        >
          {item}
          {type === "character" && item === " " && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * HEADING REVEAL COMPONENT
 * Specialized component for animated heading reveals
 */
interface HeadingRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  gradient?: boolean;
}

export function HeadingReveal({
  children,
  className = "",
  as: Tag = "h2",
  gradient = true,
}: HeadingRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        className={`inline-block ${gradient ? "text-gradient-premium" : ""}`}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
