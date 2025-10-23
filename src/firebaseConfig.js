import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANWEbtLfTvhzwIh-_lm3WbeyZxiscvD70',
  authDomain: 'wedding-website-68dd5.firebaseapp.com',
  projectId: 'wedding-website-68dd5',
  storageBucket: 'wedding-website-68dd5.firebasestorage.app',
  messagingSenderId: '1003745906465',
  appId: '1:1003745906465:web:08a1ed1a5ef8c144a87860',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
