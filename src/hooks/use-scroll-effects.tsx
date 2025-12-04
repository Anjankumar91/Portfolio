/**
 * Comprehensive scroll effects hooks using IntersectionObserver for performance
 * Includes: scroll progress, scroll-spy, parallax, and section detection
 */

import { useState, useEffect, useRef, useCallback } from "react";

// ============================================
// SCROLL PROGRESS HOOK - Tracks page scroll progress (0-100)
// ============================================
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressValue = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(progressValue);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// ============================================
// SCROLL-SPY HOOK - Tracks active section in viewport
// ============================================
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id.replace("#", ""));
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
}

// ============================================
// PARALLAX SCROLL HOOK - Creates parallax effect
// ============================================
export function useParallaxScroll(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const parallaxOffset = scrolled * speed;
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

// ============================================
// IN-VIEW HOOK - Detects when element enters viewport
// ============================================
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasAnimated(true);
        } else if (!hasAnimated) {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options, hasAnimated]);

  return { ref, isInView, hasAnimated };
}

// ============================================
// 3D TILT ON SCROLL HOOK - Creates 3D tilt effect based on scroll
// ============================================
export function useTiltOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Calculate tilt based on position relative to viewport center
      const distanceFromCenter = (elementCenter - viewportCenter) / viewportHeight;
      const rotateX = distanceFromCenter * 10; // Max 10 degrees tilt
      
      setTilt({ rotateX, rotateY: 0 });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, tilt };
}

// ============================================
// SECTION BACKGROUND COLOR HOOK - Tracks which section for bg transitions
// ============================================
export function useSectionBackground(sectionColors: Record<string, string>) {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    Object.values(sectionColors)[0] || "transparent"
  );

  useEffect(() => {
    const sections = Object.keys(sectionColors);
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setBackgroundColor(sectionColors[sectionId]);
            }
          });
        },
        {
          threshold: [0.3, 0.5, 0.7],
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionColors]);

  return backgroundColor;
}
