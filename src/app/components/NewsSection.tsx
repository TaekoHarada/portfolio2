"use client";

import React, { useState, useEffect } from "react";
import Parser from "rss-parser";
import NewsCard from "./NewsCard";

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const parser = new Parser();

    const fetchNews = async () => {
      try {
        const feed = await parser.parseURL(
          `https://www.wired.com/feed/category/business/latest/rss`
        );
        setNews(feed.items);
        console.log("Fetched news:", feed.items[0].dc);
      } catch (err) {
        console.error("Error fetching RSS feed:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <section
      id="TechNews."
      className="project-section sm:h-screen grid place-items-center"
    >
      <div className="flex group">
        <ul className="animate-loop-scroll flex group-hover:paused">
          {news.map((item) => (
            <li key={item.id}>
              <NewsCard
                title={item.title}
                content={item.content}
                imageUrl={
                  item["media:thumbnail"]
                    ? item["media:thumbnail"]["url"]
                    : null
                }
              />
            </li>
          ))}
        </ul>
        <ul className="animate-loop-scroll flex group-hover:paused">
          {news.map((item) => (
            <li key={item.id}>
              <NewsCard
                title={item.title}
                content={item.content}
                imageUrl="/images/project1.png"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsSection;
