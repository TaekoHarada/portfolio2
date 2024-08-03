"use client";

import React, { useState, useEffect } from "react";
import Parser from "rss-parser";
import NewsCard from "./NewsCard";

import Link from "next/link";

interface NewsItem {
  title: string;
  link: string;
  content: string;
  id: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const LIMIT = 5; // Number of items to display

  // const [news, setNews] = useState<{ [key: string]: any }[]>([]);

  // useEffect(() => {
  //   const parser = new Parser();

  //   const fetchNews = async () => {
  //     try {
  //       const feed = await parser.parseURL(
  //         `https://www.wired.com/feed/category/business/latest/rss`
  //       );
  //       setNews(feed.items);
  //       console.log("Fetched news:", feed.items);
  //     } catch (err) {
  //       console.error("Error fetching RSS feed:", err);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  return (
    <section id="TechNews." className="sm:h-screen py-20">
      <div>
        <div className="flex flex-col justify-end text-xl w-full text-center mb-10  sm:h-48">
          Tech News
        </div>
        <div>TEST</div>

        {news.slice(0, LIMIT).map((item) => (
          <div key={item.id || item.link}>
            <Link href={item.link} target="_blank">
              <div className="text-customGray">
                <h3 className="project-card__title font-bold text-lg">
                  {item.title}
                </h3>
                <p className="project-card__description mt-3">{item.content}</p>
              </div>
            </Link>
          </div>
        ))}

        <div className="relative w-full overflow-x-auto">
          <div className="flex group">
            <ul className="animate-loop-scroll flex group-hover:paused">
              {news.slice(0, LIMIT).map((item) => (
                <li key={item.id || item.link}>
                  <NewsCard
                    title={item.title}
                    content={item.content}
                    newsUrl={item.link}
                  />
                </li>
              ))}
            </ul>

            <ul className="animate-loop-scroll flex group-hover:paused">
              {news.slice(0, LIMIT).map((item) => (
                <li key={item.id || item.link}>
                  <NewsCard
                    title={item.title}
                    content={item.content}
                    newsUrl={item.link}
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
