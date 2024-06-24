import React from 'react'

interface IExperience {
    title: string;
    role: string;
    start_date: string;
    present: boolean;
    end_date?: string;
    responsibilities: string;
}
interface ExperienceProps {
    experience: IExperience;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <div className='w-full p-3 flex flex-col rounded-lg mb-4 border-2 border-gray-50/10'>
            <h2 className='text-lg font-bold mb-2 dark:text-gray-200'>{experience.title}</h2>
            <div className='flex flex-row items-center gap-x-8 mb-5'>
                <h3 className='text-sm sm:text-md italic dark:text-gray-300 whitespace-pre-line'>{experience.role}</h3>
                <p className='text-sm text-gray-500'>{experience.start_date} - {experience.present ? 'Present' : experience.end_date}</p>
            </div>
            <p className='text-sm dark:text-gray-400 whitespace-pre-line leading-6 text-justify'>{experience.responsibilities}</p>
        </div>
    );
}

export default Experience