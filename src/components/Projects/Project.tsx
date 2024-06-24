import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    date: string;
    image: string;
    link?: string;
    github_link?: string;
    in_progress: boolean;
    tech_stack: string[];
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="relative flex w-full h-full flex-col rounded-lg azeret-mono-400">
      {project.in_progress && (
        <div className="flex flex-row absolute -top-10 right-0">
          <p className="text-sm bg-green-200 text-green-950/85 px-2 py-1 rounded-lg">
            • In Progress
          </p>
        </div>
      )}
      <div className="flex justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-br-none rounded-bl-none rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      <div className="flex flex-col bg-gray-200 dark:bg-darkgrey h-full p-3 md:p-5 rounded-b-xl justify-between">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="dark:text-gray-200 text-3xl font-bold">
              {project.title}
            </h1>
            <p className="text-sm text-gray-500">{project.date}</p>
          </div>
          <div className="flex flex-row items-center gap-2 lg:gap-3">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-600 dark:text-gray-300 hover:text-black/90 dark:hover:text-gray-500 duration-200" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm w-auto h-fit bg-purple-300 dark:bg-purple-200 px-2 py-1 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-400 duration-200 whitespace-nowrap"
              >
                <span>View &#8594;</span>
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-700 dark:text-gray-300 font-normal text-xs text-justify">
          {project.description}
        </p>
        {project.tech_stack.length > 0 && (
          <div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-2 p-3 bg-gray-200 dark:bg-darkgrey rounded-b-xl">
            {project.tech_stack.map((tech, index) => (
              <p
                key={index}
                className="text-xs w-fit h-fit bg-gray-300 dark:bg-darkgrey text-gray-700 dark:text-gray-500 dark:border-2 dark:border-gray-500 px-2 py-1 rounded-lg"
              >
                {tech}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
