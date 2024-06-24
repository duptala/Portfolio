import React from 'react'

interface BlogProps {
    title: string;
    date: string;
    content: string;
    image?: string;
}

const Blog: React.FC<BlogProps> = ({ title, date, content, image }) => {
    return (
        <div className='w-[80%] h-full p-8 dark:bg-darkgrey bg-gray-200 flex flex-col rounded-2xl'>
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            )}
            <h1 className='text-xl font-bold mb-1 dark:text-gray-200'>{title}</h1>
            <p className='text-sm text-gray-500 dark:text-pink-200 mb-4'>{date}</p>
            <p className='text-xs leading-5 text-gray-700 dark:text-gray-300 whitespace-pre-line text-justify'>{content}</p>
        </div>
    );
};

export default Blog