import DesignsBackgroundImage from "/designs.webp";

const Designs = () => {
  return (
    <div className="relative w-full h-full bg-designs rounded-3xl overflow-hidden hover:shadow-sky-300/15 hover:shadow-2xl duration-150">
      <img
        src={DesignsBackgroundImage}
        alt="Projects Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="relative flex items-center gap-2 left-5 top-5 azeret-mono-600 font-bold text-2xl">
        <span className="flex items-center justify-center text-[2em] leading-none">
          &#x1F3A8;
        </span>
        <span className="text-black/70 leading-tight md:text-4xl lg:text-5xl xl:text-2xl">
          Graphic
          <br />
          Designs
        </span>
      </div>
    </div>
  );
};

export default Designs;
