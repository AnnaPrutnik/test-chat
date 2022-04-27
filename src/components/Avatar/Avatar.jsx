import React from 'react';
import s from './Avatar.module.css';
import DefProfile from '../../images/avatar.jpeg';
import { FaCheck, FaTimes } from 'react-icons/fa';

export const Avatar = ({ url, name = 'unknown', status = true }) => {
  return (
    <div className={s.avatar}>
      {url ? (
        <img
          src={url}
          alt={`${name}`}
          className={s.image}
          width={40}
          height={40}
        />
      ) : (
        <img
          src={DefProfile}
          alt={`${name}`}
          className={s.image}
          width={40}
          height={40}
        />
      )}

      {status ? (
        <FaCheck color='#27AE60' size={12} className={s.online} />
      ) : (
        <FaTimes color='#E74C3C' size={12} className={s.offline} />
      )}
    </div>
  );
};
