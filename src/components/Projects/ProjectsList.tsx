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
  {
    title: "Course Unbox",
    description: `CourseUnbox is a personal project that I made 
        where students can online review platform
        I made for students to be able to leave reviews
        for university courses. Over 30+ users.`,
    date: "2024",
    image: "../../../public/projects/courseunbox.png",
    link: "https://courseunbox.co.nz",
    in_progress: false,
    tech_stack: ["Next.js", "Tailwind", "PostgreSQL", "Python", "AWS"],
  },
];

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 justify-center items-center p-8">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
