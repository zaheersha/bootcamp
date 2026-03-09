import { useEffect } from "react";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import WhyTech from "../components/sections/WhyTech";
import Roadmap from "../components/sections/Roadmap";
import AiModule from "../components/sections/AiModule";
import Projects from "../components/sections/Projects";
import Internships from "../components/sections/Internships";
import Partners from "../components/sections/Partners";
import Achievements from "../components/sections/Achievements";
import Events from "../components/sections/Events";
import Trainers from "../components/sections/Trainers";
import Cta from "../components/sections/Cta";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import FloatingWhatsApp from "../components/sections/FloatingWhatsApp";

export default function Home() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Roadmap />
      <AiModule />
      <Projects />
      <Internships />
      <Partners />
      <Achievements />
      <Events />
      <br /><br />
      <Trainers />
      <Cta />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
