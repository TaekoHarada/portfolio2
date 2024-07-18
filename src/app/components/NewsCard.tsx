import Link from "next/link";
import React from "react";

interface NewsCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="news-card relative rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
      <div
        className="h-48 sm:h-56 md:h-56 lg:h-64 rounded-t-xl relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href="/">
            <div className="text-customGray">
              <h3 className="project-card__title">{title}</h3>
              <p className="project-card__description">{content}</p>
            </div>
          </Link>
        </div>
        <div className="text-customGray">
          <h3 className="project-card__title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
