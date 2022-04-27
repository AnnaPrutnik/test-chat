import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import s from './Filter.module.css';

export const Filter = ({ filter, changeFilter }) => {
  const handlerChange = (e) => {
    changeFilter(e.target.value);
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        <input
          type='text'
          value={filter}
          onChange={handlerChange}
          className={s.input}
          placeholder='Search or start new chat'
        />
        <FaSistrix color='#839192' className={s.icon} size={14} />
      </label>
    </div>
  );
};
