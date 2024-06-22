// Code extracted from UIVerse. Credit goes to Zanina-Yassine.

import React from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
    isChecked: boolean;
    toggleSwitch: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isChecked, toggleSwitch }) => {
    return (
        <div className={styles.container}>
            <input
                type="checkbox"
                className={styles.checkbox}
                id="checkbox"
                checked={isChecked}
                onChange={toggleSwitch}
            />
            <label className={styles.switch} htmlFor="checkbox">
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default Switch;
