import { FaSpotify } from "react-icons/fa";

const Spotify = () => {
  return (
    <div className="w-full h-full bg-spotify rounded-3xl azeret-mono-400 text-xs">
      <div className="flex flex-col justify-center items-center h-full gap-6 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-3">
        <FaSpotify className="text-9xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-7xl text-green-500"></FaSpotify>
        <p className="dark:text-darkgrey border-2 px-3 py-1 rounded-3xl bg-green-400 border-green-500 sm:text-sm text-xl lg:text-xl xl:text-xs">
          • Offline
        </p>

        <div className="flex flex-col justify-center text-center gap-2">
          <p className="dark:text-darkgrey sm:text-xs text-lg xl:text-[0.65rem]">
            Recently Played:
          </p>
          <div>
            <p className="dark:text-darkgrey font-bold sm:text-sm md:text-lg lg:text-3xl xl:text-sm text-2xl">
              Viva La Vida
            </p>
            <p className="dark:text-darkgrey sm:text-sm lg:text-xl xl:text-xs text-xl">
              Coldplay
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Spotify;
