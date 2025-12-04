/**
 * MAIN INDEX PAGE
 * Integrates all scroll effects:
 * - SCROLL PROGRESS BAR: Fills as user scrolls down
 * - BACKGROUND COLOR TRANSITIONS: Subtle changes between sections
 * - SMOOTH SCROLLING: Enabled via CSS in index.css
 */

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
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";
import { BackgroundTransition } from "@/components/ui/background-transition";

const Index = () => {
  return (
    <>
      {/* SCROLL PROGRESS BAR - fills as user scrolls down */}
      <ScrollProgressBar />
      
      {/* BACKGROUND TRANSITION - subtle color changes per section */}
      <BackgroundTransition>
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
      </BackgroundTransition>
    </>
  );
};

export default Index;
