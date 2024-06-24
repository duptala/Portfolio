import { Link } from "react-router-dom";
import Youtube from "../components/Designs/Youtube";
import Posters from "../components/Designs/Posters";
import SocialMedia from "../components/Designs/SocialMedia";

const designTypes = ["Photoshop", "Blender", "Premiere Pro"];

const Designs = () => {
  return (
    <div className="container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20 justify-center items-center flex flex-col azeret-mono-400">
      <h1 className="mb-4 azeret-mono-600 text-4xl text-darkgrey dark:text-pinktext">
        Graphic Designs
      </h1>
      <div className="flex flex-row gap-3 mb-5">
        {designTypes.map((type, index) => (
          <p
            key={index}
            className="text-xs w-fit bg-gray-300 dark:bg-darkgrey text-gray-700 dark:text-gray-400 dark:border-2 border-2  dark:border-gray-500 px-2 py-1 rounded-lg"
          >
            {type}
          </p>
        ))}
      </div>
      <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-300 max-w-4xl mb-6">
        I enjoy creating designs like YouTube banners, posters, and social media
        graphics. You can find my UI/UX work in the software projects section{" "}
        <Link className="underline text-sky-400" to="/projects">
          here
        </Link>
        !
      </p>
      <Youtube />
      <Posters />
      <SocialMedia />
      <a
        href="https://www.behance.net/corzah"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-300 px-3 py-2 rounded-2xl text-xs hover:scale-105 duration-200 hover:shadow-xl hover:shadow-purple-500/10 mb-3"
      >
        View more of my design work!
      </a>
    </div>
  );
};

export default Designs;
