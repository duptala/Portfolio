import React from "react";
import { FaSpotify } from "react-icons/fa";

const Spotify = () => {
  return (
    <div className="w-full h-full bg-spotify rounded-3xl azeret-mono-400 text-xs">
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <FaSpotify className="text-7xl text-green-500"></FaSpotify>
        <p className="dark:text-darkgrey border-2 px-3 py-1 rounded-3xl bg-green-400 border-green-500">
          Offline
        </p>

        <div className="flex flex-col justify-center text-center">
          <p className="dark:text-darkgrey text-[0.65rem]">Recently Played:</p>
          <p className="dark:text-darkgrey font-bold">Kurchi Madathapetti</p>
          <p className="dark:text-darkgrey">Thaman S.</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Spotify;
