import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ImExit } from 'react-icons/im';
import { Outlet } from 'react-router-dom';
import { Avatar } from '../../components/Avatar/Avatar';
import { Filter } from '../../components/Filter/Filter';
import { ChatList } from '../../components/ChatList/ChatList';

import s from './Chats.module.css';
import { useAuth } from '../../config/auth-context';
import { useChats } from '../../config/chat-context';

export const Chats = () => {
  const [filter, setFilter] = useState('');
  const { chats, isNewMsg, setIsNewMsg } = useChats();
  const auth = useAuth();
  const location = useLocation();
  const navigation = useNavigate();
  const screenWidth = window.screen.width;

  const dataForRender = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    const newData = chats
      .map((user) => ({
        ...user,
        lastMsg: user.conversations.slice(-1)[0],
      }))
      .filter((user) => user.userName.toLowerCase().includes(normalizeFilter));

    return [...newData].sort(
      (a, b) => new Date(b.lastMsg.date) - new Date(a.lastMsg.date)
    );
  }, [chats, filter]);

  useEffect(() => {
    if (location.pathname === '/' && window.screen.width > 768) {
      navigation(`/${dataForRender[0].id}`);
    }
  }, [location]);

  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className={s.container}>
      <div className={s.list}>
        <div className={s.headers}>
          <div className={s.auth}>
            <Avatar url={auth.user?.avatar || null} />
            <ImExit size={22} color='#808B96' onClick={handleSignOut} />
          </div>
          <Filter filter={filter} changeFilter={setFilter} />
        </div>
        <div className={s.main}>
          <h2 className={s.title}>Chats</h2>
          <ChatList
            data={dataForRender}
            isNewMsg={isNewMsg}
            setIsNewMsg={setIsNewMsg}
          />
        </div>
      </div>
      {screenWidth >= 768 && <Outlet />}
    </div>
  );
};
