import React from 'react';
import moment from 'moment';
import s from './Message.module.css';

export const Message = ({ talk, url }) => {
  return (
    <>
      {talk.isOwnMsg ? (
        <div className={s.answer}>
          <img
            src={url}
            alt='avatar'
            className={s.avatar}
            width={40}
            height={40}
          />
          <div className={s.wrap}>
            <span className={s.textAnswer}>{talk.text}</span>
            <span className={s.date}>
              {moment(talk.date).format('M/DD/YY LT')}
            </span>
          </div>
        </div>
      ) : (
        <div className={s.own}>
          <span className={s.textOwn}> {talk.text}</span>
          <span className={s.date}>
            {moment(talk.date).format('M/DD/YY LT')}
          </span>
        </div>
      )}
    </>
  );
};
