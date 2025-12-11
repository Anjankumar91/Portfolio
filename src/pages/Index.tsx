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

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <Hero />
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
  );
};

export default Index;
