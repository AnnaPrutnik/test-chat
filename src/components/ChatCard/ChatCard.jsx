import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';
import moment from 'moment';

import s from './ChatCard.module.css';

export const ChatCard = ({ user, isNewMsg, setIsNewMsg }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickCard = () => {
    navigate(`/${user.id}`);
    if (isNewMsg) {
      changeNotify();
    }
  };

  const changeNotify = () => {
    setIsNewMsg((prev) => ({ ...prev, [`${user.id}`]: false }));
  };

  useEffect(() => {
    if (isNewMsg && location.pathname === `/${user.id}`) {
      setTimeout(() => {
        changeNotify();
      }, 3000);
    }
  }, [isNewMsg]);

  return (
    <div className={s.card} onClick={onClickCard}>
      <Avatar url={user.avatar} name={user.userName} status={user.isOnline} />
      <div className={s.text}>
        <span className={s.name}>{user.userName}</span>
        <span className={s.msg}>
          {user.lastMsg.text.length < 50
            ? user.lastMsg.text
            : user.lastMsg.text.slice(0, 50).concat('...')}
        </span>
      </div>
      <div className={s.date}>
        {moment(user.lastMsg.date).format('MMM DD, YYYY')}
      </div>
      <div className={isNewMsg ? s.notify : s.notVisible}>1</div>
    </div>
  );
};
