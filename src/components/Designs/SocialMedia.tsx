import Ball from "/designs/socialmedia/ball.webp";
import MovieNight from "/designs/socialmedia/movienight.webp";
import PubQuiz from "/designs/socialmedia/pubquiz.webp";

const SocialMedia = () => {
  return (
    <>
      <h1 className="mb-2 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
        Social Media Designs
      </h1>
      <p className="mb-4 text-xs text-center text-gray-500 dark:text-midgrey">
        Some of the designs I've made for{" "}
        <span className="font-bold">@au.indiansociety</span>, check them out! :)
      </p>
      <div className="w-fit lg:w-[80%] grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mb-8">
        <img className="rounded-xl" src={Ball} alt={Ball} loading="lazy" />
        <img
          className="rounded-xl"
          src={MovieNight}
          alt={MovieNight}
          loading="lazy"
        />
        <img
          className="rounded-xl"
          src={PubQuiz}
          alt={PubQuiz}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SocialMedia;
