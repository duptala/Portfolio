import React from 'react'
import Experience from './Experience'

interface IExperience {
    title: string,
    role: string,
    start_date: string,
    present: boolean,
    end_date?: string,
    responsibilities: string
}

const experiences: IExperience[] = [
    {
        title: "Web Development Consulting Club (WDCC)",
        role: "Full Stack Developer •",
        start_date: "MAR 2024",
        present: true,
        responsibilities: `• Currently collaborating in a team of 9 to develop a website for AUIS, designed to serve over 500 university students.
        
        • Leading the frontend design and contributing to the implementation of various features, with project completion expected by the end of the year.`
    },
    {
        title: "Auckland University Indian Club (AUIS)",
        role: "Graphic Designer •",
        start_date: "JAN 2024",
        present: true,
        responsibilities: `• Designed visual content to promote and encourage participation in club events, including social media posts and event posters.
        
        • Assisted in the organization and execution of various club events.`
    },
    {
        title: "WSP",
        role: "Software Automation Intern •",
        start_date: "NOV 2023",
        present: false,
        end_date: "FEB 2024",
        responsibilities: `•Led projects focusing on web scraping, computer vision, and Azure Cloud Services to improve data extraction, infrastructure analysis, and operational efficiency
        
        •Utilised data scraping for traffic analysis and automation to enhance bridge standards, contributing to more effective management strategies
        
        •Conducted advanced data analysis and visualisation with Python, supporting business decision-making
        by analysing public contracts`
    },
    {
        title: "Skechers",
        role: "Sales Assistant •",
        start_date: "NOV 2022",
        present: false,
        end_date: "NOV 2023",
        responsibilities: `• Provided prompt and friendly customer service.
        
        • Enhanced communication and interpersonal skills.
        
        • Effectively addressed and resolved customer concerns.`
    }
]

const ExperienceList = () => {
    return (
        <>
            {experiences.map((experience, index) => (
                <Experience key={index} experience={experience} />
            ))}
        </>
    );
};

export default ExperienceList