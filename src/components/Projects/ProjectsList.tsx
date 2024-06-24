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
    description: `A website developed in a team of 9 for the Auckland University Indian Society (AUIS) that manages social events, processes event payments, and supports over 500 members.`,
    date: "2024",
    image: "../../../projects/auis.png",
    in_progress: true,
    tech_stack: [
      "React",
      "Tailwind",
      "Strapi",
      "Stripe",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "Portfolio",
    description: `My personal website that organizes and showcases all my projects and work in one tidy place on the web :)`,
    date: "2024",
    image: "../../../projects/portfolio.png",
    link: "https://deveshduptala.com",
    github_link: "https://github.com/duptala/Portfolio",
    in_progress: false,
    tech_stack: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "Course Unbox",
    description: `An online platform where university students can review and share their course experiences, with over 10 active users.`,
    date: "2024",
    image: "../../../projects/courseunbox.png",
    link: "https://courseunbox.co.nz",
    in_progress: false,
    tech_stack: ["Next.js", "Tailwind", "PostgreSQL", "Python", "AWS"],
  },
  {
    title: "StockQuest",
    description: `A university project to create a gamified stock market simulation. Users can join, create games, and compete in real-time to learn about stock trading.`,
    date: "2024",
    image: "../../../projects/stockquest.png",
    link: "https://stockquest.app",
    in_progress: false,
    tech_stack: ["Next.js", "Tailwind", "MongoDB", "Jest"],
  },
  {
    title: "Skechers Shoe Tracker",
    description: `An inventory management tool developed for the Skechers store where I worked. It helps staff quickly find and manage shoe locations, making it easier to assist customers and manage the store.`,
    date: "2023",
    image: "../../../projects/skechersshoetracker.png",
    link: "http://skechersshoetracker.onrender.com/",
    github_link: "https://github.com/duptala/SkechersShoeTracker",
    in_progress: false,
    tech_stack: ["JavaScript", "MongoDB"],
  },
  {
    title: "PC Remote Controller",
    description: `A tool to control media playback on a PC via a local network (LAN). It allows users to play, pause, skip media, and adjust volume. Currently used by friends.`,
    date: "2023",
    image: "../../../projects/pcremotecontrol.png",
    github_link: "https://github.com/duptala/PC-remote-control",
    in_progress: false,
    tech_stack: ["Node.js", "JavaScript", "Electron"],
  },
  {
    title: "Keyboard Marketplace",
    description: `A university project where my group of three developed an Android app for a simplified e-commerce platform focused on keyboards.`,
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
