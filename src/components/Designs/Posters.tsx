import Spiderman from "/designs/posters/spiderman.webp";
import Jumanji from "/designs/posters/jumanji.webp";
import Aaryan from "/designs/posters/aaryan.webp";
import Jaden from "/designs/posters/jaden.webp";
import LazyLoadImage from "../LazyLoadImage";

const Posters = () => {
  return (
    <>
      <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
        Posters
      </h1>
      <div className="w-fit lg:w-[80%] grid grid-cols-2 gap-5 md:gap-10 mb-10">
        <LazyLoadImage className="rounded-xl" src={Spiderman} alt="Spiderman" />
        <LazyLoadImage className="rounded-xl" src={Jumanji} alt="Jumanji" />
        <LazyLoadImage className="rounded-xl" src={Aaryan} alt="Aaryan" />
        <LazyLoadImage className="rounded-xl" src={Jaden} alt="Jaden" />
      </div>
    </>
  );
};

export default Posters;
