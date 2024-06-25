import SillyFace from "/Sillyface.webp";
import AucklandMap from "/location/Location_lwa4hg_c_scale,w_200.webp";

const Location = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="relative w-full h-full bg-gray-600 rounded-3xl">
        <picture>
          <source
            srcSet="
              location/Location_lwa4hg_c_scale,w_200.webp 200w,
              location/Location_lwa4hg_c_scale,w_416.webp 416w,
              location/Location_lwa4hg_c_scale,w_575.webp 575w,
              location/Location_lwa4hg_c_scale,w_718.webp 718w,
              location/Location_lwa4hg_c_scale,w_917.webp 917w,
              location/Location_lwa4hg_c_scale,w_1021.webp 1021w"
            sizes="(max-width: 1021px) 100vw, 1021px"
            type="image/webp"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            src={AucklandMap}
            alt="Location of Auckland"
          />
        </picture>
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
