/* eslint-disable import/no-internal-modules */
export { initializeApp, getApp } from 'firebase/app';
export type { User as FirebaseUser } from 'firebase/auth';
export { getAuth, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCOcM4Q_lQsEEKdd-MYwRpJEthV5a1ZsH4',
  authDomain: 'livecodes-93937.firebaseapp.com',
  projectId: 'livecodes-93937',
  storageBucket: 'livecodes-93937.appspot.com',
  messagingSenderId: '375700277019',
  appId: '1:375700277019:web:955c205b7de97feaba75be',
  measurementId: 'G-XLCQFR6KFM',
};
