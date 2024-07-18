import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Hover zoom effect (larger screens)
// horizontal scroll (smaller screens)
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="project-card relative rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
      <div
        className="h-48 sm:h-56 md:h-56 lg:h-64 rounded-t-xl relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href="/">
            <img
              src="/images/github-mark-white.png"
              alt="Github mark"
              className="w-10 h-10 opacity-80 hover:opacity-100 transition-all duration-500"
            />
          </Link>
        </div>
        <div className="text-customGray">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
