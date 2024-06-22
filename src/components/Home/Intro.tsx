import HelloFace from "/Helloface.png";

const Intro = () => {
  return (
    <div className="w-full h-full  bg-white dark:bg-darkgrey rounded-3xl grid grid-cols-3">
      <div className="hidden md:grid md:col-span-1 justify-center items-center">
        <div className="lg:scale-100 xl:scale-75 -rotate-3">
          <img src={HelloFace} alt="HelloFace" />
        </div>
      </div>
      <div className="grid col-span-3 md:col-span-2 azeret-mono-400 p-10">
        <h1 className="font-bold text-xl md:text-4xl xl:text-2xl">
          Hello &#x1F44B;&#x1F3FE; I'm Devesh! &#129412;
        </h1>
        <p className="text-sm md:text-md lg:text-xl xl:text-sm text-justify">
          I'm a{" "}
          <span className="text-brightpinktext dark:text-pinktext font-bold">
            developer
          </span>{" "}
          and{" "}
          <span className="text-brightpinktext dark:text-pinktext font-bold">
            graphic designer
          </span>
          , passionate about full-stack development, hosting, networking, and
          design. Explore my cozy little corner of the internet to learn more
          about me and what I do! &#127775;
        </p>
      </div>
    </div>
  );
};

export default Intro;
