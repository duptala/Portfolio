import MapLocation from "/Location.webp";
import SillyFace from "/Sillyface.webp";

const Location = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="relative w-full h-full bg-gray-600 rounded-3xl">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          src={MapLocation}
          alt="Location of my whereabouts"
        />
        <div className="absolute inset-0 flex items-center justify-center h-fit">
          <div className="absolute top-10 right-4 transform scale-[0.4] rounded-full bg-white p-1 drop-shadow-xl shadow-xl border-black border-4">
            <img
              className="rounded-full scale-[1.22] pl-2 pt-2"
              src={SillyFace}
              alt="A picture of me on the map!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
