import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";
import Galaxy from "@/components/ui/galaxy";
import { MotionReveal, MagneticHover } from "@/components/ui/motion-wrapper";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    description: "Let's connect professionally",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com",
    description: "Send me a message",
  },
  {
    icon: FileText,
    label: "Medium",
    href: "https://medium.com/@yourusername",
    description: "Read my blog posts",
  },
];

export const Contact = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-premium">Get In Touch</span>
          </h2>
        </MotionReveal>

        <MotionReveal variant="fadeUp" delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about data
          </p>
        </MotionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury">
                <div className="col-span-full">
                  <a 
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <link.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300 underline-premium">
                        {link.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <motion.div
                      whileHover={{ x: 5, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <MotionReveal variant="fadeScale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-8 text-center glass-luxury">
              <div className="col-span-full">
                <motion.p 
                  className="text-muted-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Interested in collaborating or have a question?
                </motion.p>
                <MagneticHover>
                  <Button asChild className="bg-primary hover:bg-primary/90 btn-shine overflow-hidden animate-pulse-glow">
                    <motion.a 
                      href="mailto:your.email@example.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send an Email
                    </motion.a>
                  </Button>
                </MagneticHover>
              </div>
            </GlowCard>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
};
