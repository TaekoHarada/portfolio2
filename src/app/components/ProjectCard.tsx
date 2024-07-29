import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  appLink: string;
  gitHubLink: string;
}

// Hover zoom effect (larger screens)
// horizontal scroll (smaller screens)
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  appLink,
  gitHubLink,
}) => {
  return (
    <div className="project-card relative overflow-hidden hover:scale-105 transform transition-all duration-300">
      <div
        className="h-48 w-56 md:h-48 md:w-80 relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-500">
          <div className="text-white grid place-items-center pt-3">
            <Link href={appLink} target="_blank">
              <p className="project-card_description p-5 hover:underline">
                {description}
              </p>
            </Link>
            <Link href={gitHubLink} target="_blank">
              <img
                src="/images/github-mark-white.png"
                alt="Github mark"
                className="w-10 h-10 opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-customGray grid place-items-center my-5">
        <Link href={appLink} target="_blank">
          <h3 className="font-bold hover:underline">{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
