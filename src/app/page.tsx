import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container  mx-auto px-20 py-5 mt-24">
        <HeroSection />
        <ProjectsSection />
        <NewsSection />
        <Contact />
      </div>
    </main>
  );
}
