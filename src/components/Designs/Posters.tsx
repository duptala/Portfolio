import Spiderman from "/designs/posters/spiderman.png";
import Jumanji from "/designs/posters/jumanji.png";
import Aaryan from "/designs/posters/aaryan.png";
import Jaden from "/designs/posters/jaden.png";

const Posters = () => {
  return (
    <>
      <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
        Posters
      </h1>
      <div className="w-fit lg:w-[80%] grid grid-cols-2 gap-5 md:gap-10 mb-10">
        <img
          className="rounded-xl"
          src={Spiderman}
          alt={Spiderman}
          loading="lazy"
        />
        <img
          className="rounded-xl"
          src={Jumanji}
          alt={Jumanji}
          loading="lazy"
        />
        <img className="rounded-xl" src={Aaryan} alt={Aaryan} loading="lazy" />
        <img
          className="rounded-xl"
          src={Jaden}
          alt={Spiderman}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Posters;
