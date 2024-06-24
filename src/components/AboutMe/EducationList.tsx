import React from 'react'

interface Achievement {
    description: string;
}

interface Role {
    title: string;
    organization: string;
}

interface Competition {
    title: string;
    year: number;
}

interface Academic {
    title: string;
    year: number;
}

interface Education {
    institution: string;
    degree: string;
    field: string;
    startYear: number;
    endYear: number;
    academics: Academic[];
    competitions: Competition[];
    leadershipRoles: Role[];
    achievements: Achievement[];
}

const educationData: Education[] = [
    {
        institution: "University of Auckland",
        degree: "Bachelor of Engineering (Honors)",
        field: "Software",
        startYear: 2021,
        endYear: 2024,
        academics: [
            { title: "Dean’s Honours List", year: 2021 }
        ],
        competitions: [
            { title: "SESA x WDCC Hackathon", year: 2023 }
        ],
        leadershipRoles: [
            { title: "Graphics Executive", organization: "AUIS" },
            { title: "Executive member", organization: "WDCC x AUIS Web Project" }
        ],
        achievements: []
    },
    {
        institution: "Mount Albert Grammar School",
        degree: "Highschool",
        field: "",
        startYear: 2016,
        endYear: 2020,
        academics: [],
        competitions: [],
        leadershipRoles: [],
        achievements: [
            { description: "NCEA Levels 1,2,3 with Excellence Endorsement" },
            { description: "1st in Design and Visual Communication (2019)" },
            { description: "Certificates across Geography, Physics, Calculus and Chemistry" }
        ]
    }
];

interface EducationProps {
    education: Education
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <div className='w-full p-3 flex flex-col rounded-lg mb-4 border-2 dark:border-gray-50/10 border-gray-300/70'>
            <h2 className='text-lg font-bold mb-2 dark:text-gray-200'>{education.institution}</h2>
            <div className='flex flex-row items-center gap-x-3 mb-2'>
                <h3 className='text-sm sm:text-md italic dark:text-gray-300 whitespace-pre-line'>
                    {education.degree} {education.field && `in ${education.field} •`}
                </h3>
                <p className='text-sm text-gray-500'>{education.startYear} - {education.endYear}</p>
            </div>

            {education.academics.length > 0 && (
                <div className='mt-2'>
                    <h4 className='font-semibold dark:text-gray-200'>Academics</h4>
                    <ul className='list-disc ml-5 text-sm dark:text-gray-300 leading-6'>
                        {education.academics.map((academic: Academic, index: number) => (
                            <li key={index}>{academic.title} {academic.year && `• ${academic.year}`}</li>
                        ))}
                    </ul>
                </div>
            )}

            {education.competitions.length > 0 && (
                <div className='mt-2'>
                    <h4 className='font-semibold dark:text-gray-200'>Competitions</h4>
                    <ul className='list-disc ml-5 text-sm dark:text-gray-300 leading-6'>
                        {education.competitions.map((competition: Competition, index: number) => (
                            <li key={index}>{competition.title} {competition.year && `• ${competition.year}`}</li>
                        ))}
                    </ul>
                </div>
            )}

            {education.leadershipRoles.length > 0 && (
                <div className='mt-2'>
                    <h4 className='font-semibold dark:text-gray-200'>Leadership Roles</h4>
                    <ul className='list-disc ml-5 text-sm dark:text-gray-300 leading-6'>
                        {education.leadershipRoles.map((role: Role, index: number) => (
                            <li key={index}>{role.title} - {role.organization}</li>
                        ))}
                    </ul>
                </div>
            )}

            {education.achievements.length > 0 && (
                <div className='mt-2'>
                    <h4 className='font-semibold dark:text-gray-200'>Achievements</h4>
                    <ul className='list-disc ml-5 text-sm dark:text-gray-300 leading-6'>
                        {education.achievements.map((achievement: Achievement, index: number) => (
                            <li key={index}>{achievement.description}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const EducationList = () => {
    return (
        <div className='w-full h-full'>
            {educationData.map((education, index) => (
                <Education key={index} education={education} />
            ))}
        </div>
    );
}



export default EducationList