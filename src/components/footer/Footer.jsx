import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <header className={s.footer}>
            <div className={s.name}>Андрианов Максим</div>
            <div className={s.name}>Elecard</div>
        </header>
    );
};

export default Footer;