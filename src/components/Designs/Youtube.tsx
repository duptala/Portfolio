import MattyFootyHD from "/designs/youtube/mattyfooty.webp";
import LightSkinChris from "/designs/youtube/lightskinchris.webp";
import Lachlan from "/designs/youtube/lachlan.webp";
import Reloaded from "/designs/youtube/reloaded.webp";
import Jeanfils from "/designs/youtube/jeanfils.webp";

import LachlanIcon from "/clients/lachlan.webp";
import MorgzIcon from "/clients/morgz.webp";
import JeanfilsIcon from "/clients/jeanfils.webp";
import TekkerzKidIcon from "/clients/tekkerzkid.webp";
import LazyLoadImage from "../LazyLoadImage";

const Youtube = () => {
  return (
    <>
      <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
        YouTube Banners
      </h1>
      <p className="text-xs md:text-xs text-center text-gray-500 dark:text-gray-300 max-w-4xl mb-3">
        {" "}
        I've designed YouTube banners for many clients, including popular
        creators like Lachlan, TekkerzKid, Morgz, and Jeanfils, all with over{" "}
        <span className="text-pink-400 font-bold dark:text-yellow-200">
          1 million subscribers!
        </span>{" "}
        For more of my work, check out my Behance portfolio!
      </p>
      <div className="flex flex-row gap-2 w-44 sm:w-52 justify-center items-center mb-4">
        <a
          href="https://www.youtube.com/@lachlan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LachlanIcon} alt="Lachlan Icon" />
        </a>
        <a
          href="https://www.youtube.com/@Morgz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MorgzIcon} alt="Morgz Icon" />
        </a>
        <p>
          <img src={JeanfilsIcon} alt="Jeanfils Icon" />
        </p>
        <a
          href="https://www.youtube.com/@TekkerzkidOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TekkerzKidIcon} alt="Tekkerz Kid Icon" />
        </a>
      </div>
      <div className="w-fit lg:w-[80%] flex flex-col gap-4 md:gap-6 mb-10">
        <LazyLoadImage
          className="rounded-xl"
          src={MattyFootyHD}
          alt="MattyFootyHD"
        />
        <LazyLoadImage
          className="rounded-xl"
          src={LightSkinChris}
          alt="LightSkinChris"
        />
        <LazyLoadImage className="rounded-xl" src={Lachlan} alt="Lachlan" />
        <LazyLoadImage className="rounded-xl" src={Reloaded} alt="Reloaded" />
        <LazyLoadImage className="rounded-xl" src={Jeanfils} alt="Jeanfils" />
      </div>
    </>
  );
};

export default Youtube;
