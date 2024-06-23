import React from 'react';
import Switch from './Switch/Switch';
import { Link } from 'react-router-dom';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className='p-8 container mx-auto flex justify-between'>
            <Link to={"/"} className='dark:text-white dela-gothic-one-regular text-xl'>Devesh</Link>
            <Switch isChecked={darkMode} toggleSwitch={toggleDarkMode} />
        </div>
    );
}

export default Header;
