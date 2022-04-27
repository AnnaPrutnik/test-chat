import React, { useState, useContext, createContext } from 'react';
import data from '../data/initialData.json';
let ChatsContext = createContext(null);

const initialState = (array) => {
  let state = {};
  array.forEach((user) => {
    state = { ...state, [user.id]: false };
  });
  return state;
};

export function ChatProvider({ children }) {
  let [chats, setChats] = useState(
    () => JSON.parse(localStorage.getItem('chats')) || data
  );
  const [isNewMsg, setIsNewMsg] = useState(() => initialState(chats));

  const changeChats = (newChats) => {
    setChats(newChats);
    localStorage.setItem('chats', JSON.stringify(newChats));
  };

  let value = { chats, changeChats, isNewMsg, setIsNewMsg };

  return (
    <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
  );
}

export function useChats() {
  return useContext(ChatsContext);
}
