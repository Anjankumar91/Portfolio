/**
 * ABOUT SECTION
 * Scroll effects implemented:
 * - FADE-IN ON SCROLL: Section content fades in
 * - TEXT REVEAL: Heading revealed word-by-word
 * - STAGGER ANIMATIONS: Paragraphs animate in sequence
 */

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import Galaxy from "@/components/ui/galaxy";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import { HeadingReveal, TextReveal } from "@/components/ui/text-reveal";

export const About = () => {
  const paragraphs = [
    "I'm a passionate data analyst with expertise in transforming complex datasets into clear, actionable insights. With a strong foundation in business intelligence and data visualization, I specialize in creating impactful Power BI dashboards and analytics solutions.",
    "My journey in data analytics has equipped me with hands-on experience through various job simulations and real-world projects. I'm committed to continuous learning and staying updated with the latest tools and techniques in the data science ecosystem.",
    "When I'm not analyzing data, you can find me writing about data analytics on Medium, contributing to open-source projects, or exploring new visualization techniques."
  ];

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      
      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* FADE-IN + TEXT REVEAL: Section heading */}
        <FadeIn className="mb-12 text-center">
          <HeadingReveal as="h2" className="text-4xl md:text-5xl font-bold">
            About Me
          </HeadingReveal>
        </FadeIn>

        {/* FADE-IN: Card container */}
        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8 glass-luxury">
              {/* STAGGER ANIMATIONS: Paragraphs reveal in sequence */}
              <StaggerContainer className="col-span-full space-y-6" staggerDelay={0.15}>
                {paragraphs.map((text, i) => (
                  <StaggerItem key={i}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {text}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </GlowCard>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};
