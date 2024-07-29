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
    <section id="TechNews." className="sm:h-screen py-20">
      <div>
        <div className="flex flex-col justify-end text-xl w-full text-center mb-10  sm:h-48">
          Tech News
        </div>
        <div className="relative w-full overflow-x-auto">
          <div className="flex group">
            <ul className="animate-loop-scroll flex group-hover:paused">
              {news.map((item) => (
                <li key={item.id}>
                  <NewsCard
                    title={item.title}
                    content={item.content}
                    newsUrl={item.link}
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
                    newsUrl={item.link}
                    imageUrl={
                      item["media:thumbnail"]
                        ? item["media:thumbnail"]["url"]
                        : null
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
