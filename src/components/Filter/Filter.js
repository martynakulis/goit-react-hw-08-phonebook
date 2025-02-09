import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/contacts/filterSlice';
import Input from '@mui/material/Input';

const Filter = () => {
  const filterInputId = nanoid();

  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <div className={css.section}>
      <label htmlFor={filterInputId} />
      <Input
        placeholder="Find contacts by name"
        id={filterInputId}
        name="filter"
        type="text"
        onChange={handleInput}
        sx={{ width: '20rem' }}
      />
    </div>
  );
};

export default Filter;
