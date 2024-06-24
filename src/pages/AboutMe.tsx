import React from 'react'
import Devesh from '/devesh.png'
import HoverBox from '../components/HoverBox'
import ExperienceList from '../components/AboutMe/ExperienceList'
import EducationList from '../components/AboutMe/EducationList'

const AboutMe = () => {
    return (
        <div className="container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20 justify-center items-center flex flex-col azeret-mono-400">
            <h1 className="mb-10 azeret-mono-600 text-4xl text-darkgrey dark:text-pinktext">
                About Me
            </h1>
            <div className='flex flex-col sm:flex-row justify-between w-full mb-10'>
                <div className='w-full mb-5 md:mb-0 lg:w-1/2 flex justify-center'>
                    <HoverBox><img className='w-full md:w-auto lg:h-72 object-cover' src={Devesh} alt="A picture of me!" /></HoverBox>
                </div>
                <div className='w-full h-full lg:w-1/2 flex flex-col gap-6 justify-center text-xs text-justify text-gray-700 dark:text-gray-300 max-w-4xl px-5'>
                    <p>
                        Hello! I'm Devesh, a final year Software Engineering student at the University of Auckland.
                    </p>
                    <p>
                        I'm passionate about computer networking, full-stack development, and DevOps. I enjoy working with microprocessors and creating tech projects that help people.
                    </p>
                    <p>
                        Outside of tech, I love watching sports, tinkering with gadgets, designing, and playing ping pong. I'm a creative, hardworking, and curious person, always eager to learn and take on new challenges.  Traveling is something I'm excited to add to my hobbies soon!
                    </p>
                    <p>
                        If you're in Auckland and would like to connect, let's grab a coffee! 🤝🏽
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
                    Experience
                </h1>
                <ExperienceList />
            </div>
            <div className='flex flex-col w-full justify-center items-center mb-10'>
                <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
                    Education
                </h1>
                <EducationList />
            </div>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
                    Skills
                </h1>
                <div className='flex flex-row gap-32'>
                    <div>Core Skills</div>
                    <div>Technologies</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe