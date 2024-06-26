import React from "react";
import HoverBox from "../components/HoverBox";
import Intro from "../components/Home/Intro";
import Location from "../components/Home/Location";
import AboutMe from "../components/Home/AboutMe";
import Projects from "../components/Home/Projects";
import Spotify from "../components/Home/Spotify";
import TwoTruthsOneLie from "../components/Home/TwoTruthsOneLie";
import Designs from "../components/Home/Designs";
import Hobbies from "../components/Home/Hobbies";
import Blog from "../components/Home/Blog";
import Github from "../components/Home/Github";
import ContactForm from "../components/Home/ContactForm";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20">
      <Helmet>
        <title>Devesh Duptala</title>
        <meta
          name="description"
          content="Welcome to Devesh Duptala's portfolio. Discover Devesh's projects and skills in software engineering and development."
        />
        <meta
          name="keywords"
          content="Devesh Duptala, portfolio, software engineering, projects, skills"
        />
      </Helmet>
      <div className="grid gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-8 gap-8 dark:text-white">
          <HoverBox className="col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-6 h-80 md:h-96 xl:h-auto">
            <Intro />
          </HoverBox>
          <HoverBox className="col-span-1 md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1">
            <Location />
          </HoverBox>
          <HoverBox
            className="col-span-1 md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1"
            isClickable={true}
            link="aboutme"
          >
            <AboutMe />
          </HoverBox>
          <HoverBox
            className="col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-4 h-60 md:h-80 xl:h-auto"
            isClickable={true}
            link="projects"
          >
            <Projects />
          </HoverBox>
          <HoverBox className="col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1">
            <Spotify />
          </HoverBox>
          <HoverBox className="col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1">
            <TwoTruthsOneLie />
          </HoverBox>
          <HoverBox
            className="col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-4 h-60 md:h-80 xl:h-auto"
            isClickable={true}
            link="designs"
          >
            <Designs />
          </HoverBox>
          <HoverBox className="col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1">
            <Hobbies />
          </HoverBox>
          <HoverBox
            className="col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1"
            isClickable={true}
            link="blog"
          >
            <Blog />
          </HoverBox>
          <HoverBox className="col-span-1 hidden xl:flex md:col-span-3 xl:col-span-2 aspect-w-1 aspect-h-1">
            <Github />
          </HoverBox>
          <HoverBox className="col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-4 h-60 md:h-80 xl:h-auto">
            <ContactForm />
          </HoverBox>
        </div>
      </div>
    </div>
  );
};

export default Home;
