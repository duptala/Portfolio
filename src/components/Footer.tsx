import React from 'react'
import LinkedInLight from '../../public/Linkedin-light.svg'
import GithubLight from '../../public/Github-light.svg'
import BehanceLight from '../../public/Behance-light.svg'
import LinkedInDark from '../../public/Linkedin-dark.svg'
import GithubDark from '../../public/Github-dark.svg'
import BehanceDark from '../../public/Behance-dark.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='dark:text-white p-8 flex flex-col justify-center items-center dela-gothic-one-regular text-6xl text-center'>
            <h1>Devesh Duptala</h1>
            <p className='azeret-mono-400 text-sm relative right-10 mt-2 text-darkgrey dark:text-midgrey'>All Rights Reserved. 2024</p>
            <div className='flex flex-row gap-8 mt-5 text-[1.5rem]'>
                <Link to={"https://www.linkedin.com/in/deveshduptala/"} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className=' dark:text-white' />
                </Link>
                <Link to={"https://github.com/duptala"} target="_blank" rel="noopener noreferrer">
                    <FaGithub className=' dark:text-white' />
                </Link>
                <Link to={"https://www.behance.net/corzah"} target="_blank" rel="noopener noreferrer">
                    <FaBehance className=' dark:text-white' />
                </Link>
            </div>
        </div>
    )
}

export default Footer