import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import s from './Card.module.css';

const Card = ({ card, id }) => {

    let src_name = 'http://contest.elecard.ru/frontend_data/' + card.image;

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
        // e.target.style.visibility = 'hidden';
        localStorage.setItem(card.id, 'Image in the LocalStorage');
        // window.location.reload();
        // clear();

        // let keys = Object.keys(localStorage);
        // for(let key of keys) {
        //     console.log(`${localStorage.getItem(key)}`);
        // }
            
    };

    return (
        <div className={s.element}>
            <div className={s.img_wrap}>
                <img className={s.org_icon} src={src_name} alt='' />
            </div>
            {/* <div className={s.elem_text}>{card}</div> */}
            <div className={s.category}>{card.category}</div>
            <div className={s.filesize}>filesize: {card.filesize} KB</div>
            <div className={s.time}>{cardDate}</div>
            <button className={s.close_btn} onClick={handleCloseClick}>X</button>
        </div>
    );
};

export default Card;