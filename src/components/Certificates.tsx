import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Award } from "lucide-react";
import Silk from "@/components/ui/silk";
import { MotionReveal, TiltCard, WordReveal, FadeSection } from "@/components/ui/motion-wrapper";

const certificates = [
  {
    title: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    date: "2024",
    link: "https://www.credly.com/badges/413811e7-c88c-4c74-9f6d-f8dd4e1e5b72",
    skills: ["Business Intelligence", "Data Anlaysis", "Data Modeling", "Data Visualization", "Data Transformation", "Google Cloud"]
  },
  {
    title: "AI Python for Beginners",
    issuer: "DeepLearning.AI",
    date: "2025",
    link: "https://learn.deeplearning.ai/accomplishments/4c2d83fb-1ff6-46e7-84ec-3f26790a7753?usp=sharing",
    skills: ["Python", "Generative Models", "Prompting"]
  },
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    date: "2024",
    link: "https://www.credly.com/badges/4473b9fa-73f3-4c6a-923a-1e023f9c2f11",
    skills: ["Google Cloud", "Cloud Foundations", "Cloud Computing", "Data & ML", "Cloud Storage"]
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2025",
    link: "https://badgr.com/public/assertions/PpV8sqzLTSiwrm3AZe-NkQ?identity__email=venkatanjan91%40gmail.com",
    skills: ["API", "Testing", "Scripting", "Postman"]
  },
  {
    title: "Looker for Data Visualization-Beginners and Professionals",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-3afd7f55-b5ea-4495-8228-84e07f1757ca/",
    skills: ["Looker/Looker Studio", "Data Visualization", "Data Analysis", "Data Transformation"]
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <MotionReveal variant="dramatic" className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <WordReveal text="Job Simulation Certificates" className="text-gradient-premium" />
          </h2>
        </MotionReveal>

        <FadeSection delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience through industry-recognized virtual job simulations
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <TiltCard
              key={cert.title}
              slideDirection={index % 2 === 0 ? 'left' : 'right'}
              index={index}
              tiltAmount={8}
              perspective={1000}
            >
              <GlowCard customSize className="bg-card/95 backdrop-blur-sm w-full h-auto p-6 card-hover-glow glass-luxury">
                <div className="col-span-full">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="h-6 w-6 text-primary" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                    View Certificate
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {cert.skills}
                  </p>
                </div>
              </GlowCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
