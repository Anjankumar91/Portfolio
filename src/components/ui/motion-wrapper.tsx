'use client';

import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-animation';
import { ReactNode, forwardRef } from 'react';

// Premium animation variants inspired by Apple/Rolex
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: 'blur(10px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1], // Premium cubic-bezier
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -40,
    filter: 'blur(8px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: 'blur(12px)',
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
    filter: 'blur(8px)',
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
    filter: 'blur(8px)',
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Dramatic reveal for section titles
export const dramaticReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.8,
    rotateX: 45,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Luxury card hover effect
export const luxuryCardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

interface MotionRevealProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeDown' | 'fadeScale' | 'slideLeft' | 'slideRight' | 'dramatic';
  delay?: number;
  className?: string;
  once?: boolean;
}

const variantMap = {
  fadeUp: fadeInUp,
  fadeDown: fadeInDown,
  fadeScale: fadeInScale,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  dramatic: dramaticReveal,
};

// Scroll-triggered reveal component
export const MotionReveal = forwardRef<HTMLDivElement, MotionRevealProps>(({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
  once = true,
  ...props
}, forwardedRef) => {
  const { ref, isInView } = useScrollReveal({ once });

  const selectedVariant = variantMap[variant];
  const modifiedVariant: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={forwardedRef || ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={modifiedVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

MotionReveal.displayName = 'MotionReveal';

// Stagger children container
interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(({
  children,
  className,
  staggerDelay = 0.12,
  ...props
}, ref) => {
  const { ref: scrollRef, isInView } = useScrollReveal({ once: true });

  const customStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref || scrollRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customStagger}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

StaggerContainer.displayName = 'StaggerContainer';

// Stagger item for use inside StaggerContainer
export const StaggerItem = forwardRef<HTMLDivElement, Omit<MotionRevealProps, 'variant'>>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

StaggerItem.displayName = 'StaggerItem';

// Premium hover card wrapper
interface LuxuryHoverCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export const LuxuryHoverCard = forwardRef<HTMLDivElement, LuxuryHoverCardProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <motion.div
      ref={ref}
      initial="rest"
      whileHover="hover"
      variants={luxuryCardHover}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

LuxuryHoverCard.displayName = 'LuxuryHoverCard';

// Magnetic hover effect for buttons/icons
interface MagneticHoverProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticHover = ({ children, className, strength = 0.3 }: MagneticHoverProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal character by character
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
  const { ref, isInView } = useScrollReveal({ once: true });

  const characters = text.split('');

  return (
    <motion.span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Parallax wrapper component
interface ParallaxWrapperProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxWrapper = forwardRef<HTMLDivElement, ParallaxWrapperProps>(({
  children,
  offset = 50,
  className,
  ...props
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: -offset }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'linear' }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

ParallaxWrapper.displayName = 'ParallaxWrapper';

// Smooth scroll indicator
export const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
      <motion.div
        className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-1.5 h-3 bg-primary rounded-full mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

// Shimmer effect for loading states
export const ShimmerEffect = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`}
      animate={{ translateX: ['100%', '-100%'] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
  );
};
