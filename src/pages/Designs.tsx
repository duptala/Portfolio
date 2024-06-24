import React from "react";
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
            <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-300 max-w-4xl mb-8">
                I enjoy creating designs like YouTube banners, posters, and social media graphics. You can find my UI/UX work in the
                software projects section{" "}
                <Link className="underline text-sky-400" to="/projects">
                    here
                </Link>
                !
            </p>
            <p className="text-xs md:text-sm text-center text-gray-500 dark:text-gray-300 max-w-4xl mb-8">
                {" "}
                I've created YouTube banners for clients like Lachlan, TekkerzKid,
                Morgz, and Jeanfils, all with over 1 million subscribers. For more of my
                work, check out my Behance portfolio!
            </p>
            <Youtube />
            <Posters />
            <SocialMedia />
        </div>
    );
};

export default Designs;
