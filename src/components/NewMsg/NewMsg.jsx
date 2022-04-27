import React, { useState } from 'react';
import { MdOutlineSend } from 'react-icons/md';
import s from './NewMsg.module.css';

export const NewMsg = ({ addMsg }) => {
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg) {
      return;
    }
    addMsg(msg);
    setMsg('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <input
            type='text'
            value={msg}
            onChange={handleChange}
            className={s.input}
            placeholder='Type your message'
          />
        </label>
        <button type='submit' className={s.btn}>
          <MdOutlineSend color='#839192' size={22} />
        </button>
      </form>
    </div>
  );
};
