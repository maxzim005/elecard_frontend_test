import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import s from './Switch.module.css';

const Switch = ({switchView, setSwitchView}) => {

    // const [value, setValue] = useState('cards');

    const handleChange = (e) => {
        setSwitchView(e.target.value);
    };

    return (
        <div className={s.switch}>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Отображаемый вид</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={switchView}
                    onChange={handleChange}
                >
                    <FormControlLabel value="cards" control={<Radio />} label="Карточки" />
                    <FormControlLabel value="tree" control={<Radio />} label="Дерево" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Switch;