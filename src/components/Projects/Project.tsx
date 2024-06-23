import React from "react";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    date: string;
    image: string;
    link?: string;
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
      <div className="flex flex-col bg-darkgrey h-full p-3">
        <div>
          <h1 className="text-lg font-bold">{project.title}</h1>
          <p className="text-sm text-gray-500">{project.date}</p>
        </div>
        <p className="mt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
