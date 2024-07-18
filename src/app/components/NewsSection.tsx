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
          `https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=19854910`
        );
        setNews(feed.items);
        console.log("Fetched news:", feed.items);
      } catch (err) {
        console.error("Error fetching RSS feed:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {news.map((item) => (
          <li key={item.id}>
            <NewsCard
              title={item.title}
              content={item.description}
              imageUrl="/images/project1.png"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
