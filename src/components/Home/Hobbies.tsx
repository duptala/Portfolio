const hobbies = [
  { hobby: "Photography", emoji: "&#x1F4F7;" },
  { hobby: "Biking", emoji: "&#x1F6B4;&#x200D;&#x2642;&#xFE0F;" },
  { hobby: "Designing", emoji: "&#128396;" },
  { hobby: "Kayaking", emoji: "&#x1F6F6;" },
  { hobby: "Ping Pong", emoji: "&#x1F3D3;&#xFE0F;" },
  { hobby: "Cricket", emoji: "&#x1F3CF;" },
];

const Hobbies = () => {
  return (
    <div className="w-full h-full flex flex-col bg-hobbies rounded-3xl p-3">
      <h1 className="relative left-2 top-2 azeret-mono-600 font-bold text-5xl sm:text-xl md:text-3xl lg:text-5xl xl:text-xl dark:text-black mb-3 sm:mb-1  md:mb-2">
        &#x1f3ae; <span className="opacity-70">Hobbies</span>
      </h1>
      <ul className="text-center h-full flex flex-col justify-center align-middle ml-16 sm:ml-7 lg:ml-16 xl:ml-7">
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            className="flex items-center justify-start text-black azeret-mono-400 ml-4 xl:ml-1 text-[1.5rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.7rem] xl:text-[1rem]"
          >
            <span
              dangerouslySetInnerHTML={{ __html: hobby.emoji }}
              className="mr-2 opacity-100"
            />
            <span className="opacity-60">{hobby.hobby}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
