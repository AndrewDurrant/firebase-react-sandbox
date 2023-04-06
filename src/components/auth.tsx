import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

import styles from '@/styles/Home.module.css'

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input 
        type='email'
        placeholder='Email...'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type='password'
        placeholder='Password...'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={logIn}> Log In </button>
      <button onClick={logOut}> Log Out </button>
      <span>OR</span>
      <button onClick={logInWithGoogle}>Log In With Google</button>
    </div>
  )
}