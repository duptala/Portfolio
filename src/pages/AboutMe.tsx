import Devesh from "/devesh.png";
import HoverBox from "../components/HoverBox";
import ExperienceList from "../components/AboutMe/ExperienceList";
import EducationList from "../components/AboutMe/EducationList";
import { Helmet } from "react-helmet-async";

const coreLanguages = ["Java", "JavaScript/TypeScript", "Python", "SQL"];

const technologies = [
  "ReactJS",
  "Amazon Web Services (AWS)",
  "Microsoft Azure Services",
  "MySQL/PostgreSQL ❤️",
  "MongoDB (with Mongoose)",
  "TailwindCSS",
  "JavaFX",
];

const AboutMe = () => {
  return (
    <div className="container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20 justify-center items-center flex flex-col azeret-mono-400">
      <Helmet>
        <title>About Me | Devesh Duptala's Portfolio</title>
        <meta
          name="description"
          content="Learn more about Devesh Duptala, a passionate software engineering student with interests in networking, full-stack development, and more."
        />
        <meta
          name="keywords"
          content="about me, Devesh Duptala, software engineering, networking, full-stack development"
        />
      </Helmet>
      <h1 className="mb-10 azeret-mono-600 text-4xl text-darkgrey dark:text-pinktext">
        About Me
      </h1>
      <div className="flex flex-col sm:flex-row justify-between w-full mb-10">
        <div className="w-full mb-5 md:mb-0 lg:w-1/2 flex justify-center">
          <HoverBox>
            <img
              className="w-full md:w-auto lg:h-72 object-cover"
              src={Devesh}
              alt="A picture of me!"
            />
          </HoverBox>
        </div>
        <div className="w-full h-full lg:w-1/2 flex flex-col gap-6 justify-center text-xs text-justify text-gray-700 dark:text-gray-300 max-w-4xl px-5">
          <p>
            Hello! I'm Devesh, a final year Software Engineering student at the
            University of Auckland.
          </p>
          <p>
            I'm passionate about computer networking, full-stack development,
            software architecture and DevOps. I enjoy working with
            microprocessors and creating tech projects that help people.
          </p>
          <p>
            Outside of tech, I love watching sports, tinkering with gadgets,
            designing, and playing ping pong. I'm a creative, hardworking, and
            curious person, always eager to learn and take on new challenges.
            Traveling is something I'm excited to add to my hobbies soon!
          </p>
          <p>
            If you're in Auckland and would like to connect, let's grab a
            coffee! 🤝🏽
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
          Experience
        </h1>
        <ExperienceList />
      </div>
      <div className="flex flex-col w-full justify-center items-center mb-10">
        <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
          Education
        </h1>
        <EducationList />
      </div>
      <div className="flex w-full flex-col justify-center items-center mb-6">
        <h1 className="mb-3 w-full flex flex-col justify-around items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
          Skills
        </h1>
        <div className="flex w-full justify-evenly flex-col xl:flex-row gap-8 xl:gap-32">
          <div className="w-full p-3 flex flex-col rounded-lg mb-4 border-2 dark:border-gray-50/10 border-gray-300/70">
            <h1 className="flex justify-center dark:text-midgrey font-bold text-xl mb-3">
              Core Languages
            </h1>
            {coreLanguages.map((language, index) => {
              return (
                <li className="text-gray-700 dark:text-gray-400" key={index}>
                  {language}
                </li>
              );
            })}
          </div>
          <div className="w-full p-3 flex flex-col rounded-lg mb-4 border-2 dark:border-gray-50/10 border-gray-300/70">
            <h1 className="flex justify-center dark:text-midgrey font-bold text-xl mb-3">
              Technologies
            </h1>
            {technologies.map((technology, index) => {
              return (
                <li className="text-gray-700 dark:text-gray-400" key={index}>
                  {technology}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
