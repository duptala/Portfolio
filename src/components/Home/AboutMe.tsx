import React from "react";

const AboutMe = () => {
  return (
    <div className="relative w-full h-full bg-aboutme rounded-3xl p-5 overflow-hidden hover:shadow-red-300/15 hover:shadow-2xl duration-150">
      <div className="w-full max-w-lg">
        <h1 className="azeret-mono-600 font-bold text-5xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-2xl text-black/90 mb-4 xl:mb-1">
          &#x1F64B;&#x1F3FE;&#x200D;&#x2642;&#xFE0F;{" "}
          <span className="opacity-70">About Me</span>
        </h1>
        <p className="text-aboutme-text azeret-mono-400 leading-relaxed text-3xl  sm:text-sm md:text-lg lg:text-4xl lg:leading-snug xl:text-sm xl:leading-loose text-justify">
          <span className="border-b-2 border-dashed border-red-700/35">
            I&apos;m currently a final year software engineering student at the
            University of Auckland with a passion for networks, full-stack
            development and design.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
