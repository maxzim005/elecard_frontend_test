import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import s from './Header.module.css';

const Header = () => {

    const handleClick = (e) => {
        localStorage.clear();
        window.location.reload();
        clear();
    }

    return (
        <header className={s.header}>
            <div className={s.name}>Андрианов Максим</div>
            <div className={s.name}>Elecard</div>
            <button onClick={handleClick}>Reset</button>
        </header>
    );
};

export default Header;