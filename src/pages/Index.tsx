import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Dashboards } from "@/components/Dashboards";
import { Achievements } from "@/components/Achievements";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Prism from "@/components/ui/prism";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Fixed Prism background that starts after hero */}
      <div className="fixed inset-0 top-[100vh] -z-10 pointer-events-none">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
      
      {/* Content sections that scroll over the fixed background */}
      <div className="relative z-0">
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Dashboards />
        <Achievements />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
