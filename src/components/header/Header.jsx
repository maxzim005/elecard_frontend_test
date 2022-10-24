import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.name}>Андрианов Максим</div>
            <div className={s.name}>Elecard</div>
        </header>
    );
};

export default Header;