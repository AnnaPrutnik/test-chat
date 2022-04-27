import React, { useState, useContext, createContext } from 'react';

let AuthContext = createContext(null);

export function AuthProvider({ children }) {
  let [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('auth')) || null
  );

  const signIn = (user) => {
    setUser(user);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('auth');
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
