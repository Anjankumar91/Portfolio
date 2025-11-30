import { useEffect, useRef, useState } from 'react';
import { useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

// Premium scroll-triggered reveal hook
export const useScrollReveal = (options?: {
  threshold?: number;
  once?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.threshold ?? 0.2,
  });

  return { ref, isInView };
};

// Parallax effect hook
export const useParallax = (offset: number = 50): { ref: React.RefObject<HTMLDivElement>; y: MotionValue<number> } => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
};

// Smooth counter animation hook
export const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Premium easing - cubic-bezier inspired by Apple
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { ref, count };
};

// Premium stagger delay calculator
export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay;
};
