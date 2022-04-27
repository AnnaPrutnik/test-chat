import React, { useEffect, useMemo, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { MdKeyboardBackspace } from 'react-icons/md';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';
import { Message } from '../Message/Message';
import { NewMsg } from '../NewMsg/NewMsg';
import s from './Chat.module.css';
import { fetchAnswer } from '../../services/chuckNorisAPI';
import { useChats } from '../../config/chat-context';

export const Chat = () => {
  const { chats, changeChats, setIsNewMsg } = useChats();
  const params = useParams();
  const navigate = useNavigate();
  const list = useRef(null);

  useEffect(() => {
    list.current.scrollTop = list.current.scrollHeight;
  }, [params.id, chats]);

  const user = useMemo(() => {
    return chats.filter((user) => user.id === params.id)[0];
  }, [chats, params.id]);

  const getAnswer = async () => {
    const data = await fetchAnswer();
    return data;
  };

  const addMsg = (msg, status) => {
    const newMsg = {
      id: uuid(),
      text: msg,
      isOwnMsg: status,
      date: moment().format(),
    };
    const newUser = { ...user };
    newUser.conversations.push(newMsg);
    const newChats = chats.map((user) =>
      user.id === newUser.id ? { ...newUser } : { ...user }
    );
    changeChats(newChats);
  };

  const handleAddNewMsg = async (msg) => {
    addMsg(msg, false);
    const answer = await getAnswer();
    setTimeout(() => {
      addMsg(answer, true);
      setIsNewMsg((prev) => ({ ...prev, [`${user.id}`]: true }));
      toast.success(`You have a new message from ${user.userName}`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }, 10000);
  };

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <div className={s.chat}>
      <div className={s.header}>
        <button className={s.back} onClick={handleClickBack}>
          <MdKeyboardBackspace size={24} color='#808B96' />
        </button>
        <Avatar url={user.avatar} name={user.userName} status={user.isOnline} />
        <span className={s.name}>{user.userName}</span>
      </div>
      <div className={s.conversation} ref={list}>
        {user.conversations.map((talk) => (
          <Message key={talk.id} talk={talk} url={user.avatar} />
        ))}
      </div>
      <div className={s.add}>
        <NewMsg addMsg={handleAddNewMsg} />
      </div>
    </div>
  );
};
