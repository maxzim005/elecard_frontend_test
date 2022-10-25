import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import s from './SortBy.module.css';

const SortBy = ({ sortBy, setSortBy }) => {

    const handleChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className={s.sortby}>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group"> Сортировать по: </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={sortBy}
                    onChange={handleChange}
                >
                    <FormControlLabel value="sort_category" control={<Radio />} label="Категории" />
                    <FormControlLabel value="sort_date" control={<Radio />} label="Дате" />
                    <FormControlLabel value="sort_name" control={<Radio />} label="Названию файла" />
                    <FormControlLabel value="sort_filesize" control={<Radio />} label="Размеру файла" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default SortBy;