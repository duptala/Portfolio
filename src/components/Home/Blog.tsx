import React from "react";

const Blog = () => {
  return (
    <div className="w-full h-full bg-blog rounded-3xl flex flex-col overflow-hidden hover:shadow-pink-300/15 hover:shadow-2xl duration-150">
      <h1 className="mt-5 ml-5 azeret-mono-600 font-bold text-5xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-2xl dark:text-black/90">
        &#x1F4D3; <span className="opacity-70">Blog</span>
      </h1>
      <div className="flex-grow relative container">
        <div className="w-[80%] h-[30%] bg-pink-800/30 relative left-0 top-10 flex flex-col justify-center azeret-mono-400 p-5 xl:p-2 rounded-r-xl">
          <p className="text-white text-3xl sm:text-sm md:text-md lg:text-3xl xl:text-sm font-bold">
            My First Blog!
          </p>
          <p className="text-xl sm:text-xs md:text-sm lg:text-xl xl:text-xs text-pink-100/100">
            24/06/2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
