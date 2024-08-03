"use client";

import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";

import Parser from "rss-parser";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   const parser = new Parser();
//   const feed = await parser.parseURL(
//     "https://www.wired.com/feed/category/business/latest/rss"
//   );
//   const news = feed.items.map((item) => ({
//     title: item.title,
//     link: item.link,
//     content: item.content,
//     id: item.id,
//   }));
// }

interface NewsItem {
  title: string;
  link: string;
  content: string;
  id: string;
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const parser = new Parser();
    const fetchNews = async () => {
      try {
        const feed = await parser.parseURL(
          `https://www.wired.com/feed/category/business/latest/rss`
        );
        const newsItems = feed.items.map((item) => ({
          title: item.title!,
          link: item.link!,
          content: item.content!,
          id: item.id!,
        }));
        setNews(newsItems);
        console.log("Fetched news:", feed.items);
      } catch (err) {
        console.error("Error fetching RSS feed:", err);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-auto py-5 mt-20 sm:mt-0 ">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <NewsSection news={news} />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
