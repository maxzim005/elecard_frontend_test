import { clear } from '@testing-library/user-event/dist/clear';
import React, { useRef } from 'react';
import s from './Card.module.css';

const Card = ({ card}) => {

    let src_name = 'http://contest.elecard.ru/frontend_data/' + card.image;
    const cardElement = useRef();

    let correctDate = new Date(card.timestamp);
    let day, month;
    if (correctDate.getDate() <= 9) {
        day = '0' + correctDate.getDate();
    }
    else {
        day = correctDate.getDate();
    }

    if ((correctDate.getMonth() + 1) < 9) {
        month = '0' + (+correctDate.getMonth() + 1);
    }
    else {
        month = +correctDate.getMonth() + 1;
    }

    let cardDate = day + '.' + month + '.' + correctDate.getFullYear();

    const handleCloseClick = (e) => {
        localStorage.setItem(card.image, 'Image in the LocalStorage');
        cardElement.current.style.visibility = 'hidden';
        window.location.reload();
        clear();
    };

    return (
        <div className={s.element} ref={cardElement}>
            <div className={s.img_wrap}>
                <img className={s.org_icon} src={src_name} alt='' />
            </div>
            <div className={s.category}>{card.category}</div>
            <div className={s.image}>{card.image}</div>
            <div className={s.filesize}>filesize: <div className={s.filesize_value}>{card.filesize} KB</div></div>
            <div className={s.time}>{cardDate}</div>
            <button className={s.close_btn} onClick={handleCloseClick}>X</button>
        </div>
    );
};

export default Card;