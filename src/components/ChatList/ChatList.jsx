import React from 'react';
import { ChatCard } from '../ChatCard/ChatCard';

import s from './ChatList.module.css';

export const ChatList = ({ data, isNewMsg, setIsNewMsg }) => {
  return (
    <>
      <ul className={s.list}>
        {data &&
          data.map((user) => (
            <li key={user.id} className={s.item}>
              <ChatCard
                user={user}
                isNewMsg={isNewMsg[`${user.id}`]}
                setIsNewMsg={setIsNewMsg}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
