import ProjectsList from "../components/Projects/ProjectsList";

const projectTypes = ["Full-Stack", "Figma", "DevOps", "Microprocessors"];

const Projects = () => {
  return (
    <div className="container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20 justify-center items-center flex flex-col">
      <h1 className="mb-4 azeret-mono-600 text-4xl text-darkgrey dark:text-pinktext">
        Projects
      </h1>
      <div className="flex flex-row gap-3 mb-10">
        {projectTypes.map((type, index) => (
          <p
            key={index}
            className="text-xs azeret-mono-400 w-fit bg-gray-300 dark:bg-darkgrey text-gray-700 dark:text-gray-400 dark:border-2 border-2  dark:border-gray-500 px-2 py-1 rounded-lg"
          >
            {type}
          </p>
        ))}
      </div>
      <ProjectsList />
    </div>
  );
};

export default Projects;
