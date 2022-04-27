import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';

export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const user = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};
