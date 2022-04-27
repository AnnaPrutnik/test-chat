import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const data = await signInWithPopup(auth, provider);
    return data.user;
  } catch (error) {
    console.log(error);
  }
};
