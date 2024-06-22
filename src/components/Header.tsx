import React from 'react'

const Header = () => {
    const toggleDarkMode = () => {
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <div className='p-8 container mx-auto flex justify-between'>
            <div className='dark:text-white'>Devesh.</div>
            <button className='dark:text-white' onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}

export default Header