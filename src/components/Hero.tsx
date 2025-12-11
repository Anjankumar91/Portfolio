import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { renderCanvas } from "@/components/ui/canvas";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { ScrollIndicator, MagneticHover } from "@/components/ui/motion-wrapper";
import DarkVeil from "@/components/ui/dark-veil";
import Orb from "@/components/ui/orb";
import LightPillar from "@/components/ui/light-pillar";

export const Hero = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  // Premium animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* DarkVeil animated background layer */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <DarkVeil speed={0.3} warpAmount={0.3} />
      </div>
      
      {/* Orb animated background layer */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <Orb 
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      
      {/* LightPillar animated background layer */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>
      
      <canvas
        className="pointer-events-none absolute inset-0 z-0"
        id="canvas"
      ></canvas>
      
      {/* Luxury ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="container mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="text-5xl md:text-7xl font-bold mb-6 h-20 md:h-28 flex items-center justify-center">
            <VaporizeTextCycle
              texts={["Venkat Anjan Kumar"]}
              font={{
                fontFamily: "Inter, sans-serif",
                fontSize: "70px",
                fontWeight: 700
              }}
              color="rgb(255, 255, 255)"
              spread={5}
              density={5}
              animation={{
                vaporizeDuration: 2,
                fadeInDuration: 1,
                waitDuration: 0.5
              }}
              direction="left-to-right"
              alignment="center"
              tag={Tag.H1}
            />
          </div>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-4"
          variants={itemVariants}
        >
          Data Analyst | Business Intelligence Developer
        </motion.p>

        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          Transforming data into actionable insights. Specialized in Power BI, data visualization, 
          and analytics solutions that drive business decisions.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          <MagneticHover>
            <Button asChild className="bg-primary hover:bg-primary/90 btn-shine relative overflow-hidden">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </Button>
          </MagneticHover>
          <MagneticHover>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 btn-shine relative overflow-hidden">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </Button>
          </MagneticHover>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {[
            { Icon: Github, href: "https://github.com/yourusername" },
            { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
            { Icon: Mail, href: "mailto:your.email@example.com" },
            { Icon: FileText, href: "https://medium.com/@yourusername" },
          ].map((social, i) => (
            <motion.div
              key={social.href}
              custom={i}
              variants={socialVariants}
              initial="hidden"
              animate="visible"
            >
              <MagneticHover>
                <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <motion.a 
                    href={social.href} 
                    target={social.Icon !== Mail ? "_blank" : undefined}
                    rel={social.Icon !== Mail ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.Icon className="h-5 w-5" />
                  </motion.a>
                </Button>
              </MagneticHover>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <ScrollIndicator />
        </motion.div>
      </motion.div>
    </section>
  );
};
