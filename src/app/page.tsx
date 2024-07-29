import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container  mx-auto px-20 py-5 mt-20 sm:mt-0 ">
        <HeroSection />
        <ProjectsSection />
        <NewsSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
