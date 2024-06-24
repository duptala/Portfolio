import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:text-white p-8 flex flex-col justify-center items-center dela-gothic-one-regular text-6xl text-center">
      <h1>Devesh Duptala</h1>
      <p className="azeret-mono-400 text-xs relative md:right-24 mt-5 md:mt-2 text-darkgrey dark:text-midgrey">
        &copy; 2024 Devesh Duptala - All Rights Reserved
      </p>
      <div className="flex flex-row gap-8 mt-5 text-[1.5rem]">
        <a
          href="https://www.linkedin.com/in/deveshduptala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="dark:text-white dark:hover:text-purple-300 duration-150 hover:text-purple-300" />
        </a>
        <a
          href="https://github.com/duptala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="dark:text-white dark:hover:text-purple-300 duration-150 hover:text-purple-300" />
        </a>
        <a
          href="https://www.behance.net/corzah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance className="dark:text-white dark:hover:text-purple-300 duration-150 hover:text-purple-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
