import AboutSection from "./components/About";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/Hero";
import Navbar from "./components/NavBar";
import ProjectsSection from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
