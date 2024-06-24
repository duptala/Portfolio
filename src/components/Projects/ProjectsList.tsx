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
    image: "../../../projects/auis.png",
    in_progress: true,
    tech_stack: ["React", "Tailwind", "Strapi", "Stripe", "PostgreSQL"],
  },
  {
    title: "Portfolio",
    description: `This very site you're seeing was done to showcase all my work in one tidy space on the web :)`,
    date: "2024",
    image: "../../../projects/portfolio.png",
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
    image: "../../../projects/courseunbox.png",
    link: "https://courseunbox.co.nz",
    in_progress: false,
    tech_stack: ["Next.js", "Tailwind", "PostgreSQL", "Python", "AWS"],
  },
  {
    title: "StockQuest",
    description: `A university group project which is aimed to 
make a gamified version of the stock market 
to allow users to join, create games and battle 
it out real time.`,
    date: "2024",
    image: "../../../projects/stockquest.png",
    link: "https://stockquest.app",
    in_progress: false,
    tech_stack: ["Next.js", "Tailwind", "MongoDB", "Jest"],
  },
  {
    title: "Skechers Shoe Tracker",
    description: `An online management tool for store to manage
inventory of items for quicker retrieval on 
shop floor. It was used internally by staff 
members.`,
    date: "2023",
    image: "../../../projects/skechersshoetracker.png",
    link: "http://skechersshoetracker.onrender.com/",
    github_link: "https://github.com/duptala/SkechersShoeTracker",
    in_progress: false,
    tech_stack: ["JavaScript", "MongoDB"],
  },
  {
    title: "PC Remote Controller",
    description: `A tool which you can connect to pc running the
script through local area network (LAN) to 
control playback (play, pause, forward etc.). 
Used by friends and co.`,
    date: "2023",
    image: "../../../projects/pcremotecontrol.png",
    github_link: "https://github.com/duptala/PC-remote-control",
    in_progress: false,
    tech_stack: ["Node.js", "JavaScript", "Electron"],
  },
  {
    title: "Keyboard Marketplace",
    description: `An android application that focuses on a 
simplified e-commerce platform but for android. 
Our theme was keyboards so we made a demo 
application for it.`,
    date: "2023",
    image: "../../../projects/keyboardmarketplace.png",
    in_progress: false,
    tech_stack: ["Java", "Android Studio", "Firebase"],
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
