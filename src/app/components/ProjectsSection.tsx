import React from "react";
import ProjectCard from "./ProjectCard";

// Project List
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    imageUrl: "/images/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    imageUrl: "/images/project1.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description 3",
    imageUrl: "/images/project1.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="Projects."
      className="project-section sm:h-screen grid place-items-center"
    >
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl="/images/project1.png"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
