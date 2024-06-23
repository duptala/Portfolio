import React from "react";
import Project from "./Project";

interface ProjectData {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
  github_link?: string;
  in_progress: boolean;
  tech_stack: string[];
}

const projects: ProjectData[] = [
  {
    title: "AUIS Website",
    description:
      "Auckland University Indian Society is a univeristy group related project to create a website for the AUIS club which handles events, payments etc. Over 500+ users to be used.",
    date: "2024",
    image: "../../../public/projects/auis.png",
    in_progress: true,
    tech_stack: ["React", "Tailwind", "Strapi", "Stripe", "PostgreSQL"],
  },
  {
    title: "Portfolio",
    description:
      "This very site you’re seeing was done to showcase all my work in one tidy space on the web:)",
    date: "2024",
    image: "../../../public/projects/portfolio.png",
    link: "https://deveshduptala.com",
    github_link: "https://github.com/duptala/Portfolio",
    in_progress: false,
    tech_stack: ["React", "Tailwind", "TypeScript", "Self-Hosted"],
  },
];

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center p-8">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
