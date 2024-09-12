import React from "react";
import ProjectCard from "./ProjectCard";

// Project List
const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "CRUD App (React + TypeScript + Firebase + bootstrap 5)",
    imageUrl: "/images/project_expensetracker.png",
    appLink: "https://expense-tracker-8205b.web.app/",
    gitHubLink: "https://github.com/TaekoHarada/expense_tracker",
  },
  {
    id: 2,
    title: "Let's Cook!",
    description: "Recipe search web app by React. Fetch from spoonacular API",
    imageUrl: "/images/project_letscook.png",
    appLink: "https://lets-cook-mu.vercel.app/",
    gitHubLink: "https://github.com/TaekoHarada/lets_cook",
  },
  {
    id: 3,
    title: "Job Board",
    description: "CRUD App. Routing by React Router.",
    imageUrl: "/images/project_jobboard.png",
    appLink: "https://job-board-three-kappa.vercel.app/",
    gitHubLink: "https://github.com/TaekoHarada/job_board.git",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="Projects."
      className="project-section sm:h-screen grid place-items-center pt-10 lg:pt-0"
    >
      <div>
        <h2 className="text-2xl w-full text-center my-10 bold">Projects</h2>
        <div className="rounded-xl">
          <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  appLink={project.appLink}
                  gitHubLink={project.gitHubLink}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
