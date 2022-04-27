import React from 'react';
import s from './Login.module.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { signInWithFacebook } from '../../auth/facebook';
import { signInWithGoogle } from '../../auth/google';
import { useAuth } from '../../config/auth-context';

export const Login = () => {
  const auth = useAuth();

  const onClickFacebook = async () => {
    const userData = await signInWithFacebook();
    auth.signIn({ name: userData.displayName, avatar: userData.photoURL });
  };

  const onClickGoogle = async () => {
    const userData = await signInWithGoogle();
    auth.signIn({ name: userData.displayName, avatar: userData.photoURL });
  };

  return (
    <div className={s.container}>
      <div className={s.form}>
        <h2 className={s.title}>Welcome to chat!</h2>
        <button className={s.btn} onClick={onClickGoogle}>
          Sign in with
          <FcGoogle size={18} className={s.icon} />
        </button>

        <button className={s.btn} onClick={onClickFacebook}>
          Sign in with
          <FaFacebook size={18} className={s.icon} color='#2E86C1' />
        </button>
      </div>
    </div>
  );
};
