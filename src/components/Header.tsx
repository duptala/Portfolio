import React from 'react';
import Switch from './Switch/Switch';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className='p-8 container mx-auto flex justify-between'>
            <div className='dark:text-white dela-gothic-one-regular text-xl'>Devesh</div>
            <Switch isChecked={darkMode} toggleSwitch={toggleDarkMode} />
        </div>
    );
}

export default Header;
