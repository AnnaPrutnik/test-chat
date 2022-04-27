import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApPrVCkun0Zk9JmR4NzZnHtShBJhQePDE',
  authDomain: 'test-chat-429b3.firebaseapp.com',
  projectId: 'test-chat-429b3',
  storageBucket: 'test-chat-429b3.appspot.com',
  messagingSenderId: '695315060661',
  appId: '1:695315060661:web:0c802701cb7a5430982bfc',
  measurementId: 'G-GYV336MQMD',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
