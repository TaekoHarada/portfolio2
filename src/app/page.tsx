import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-auto py-5 mt-20 sm:mt-0 ">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <NewsSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
