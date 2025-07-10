import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAdLlc4-N2uYR9lxjIpgW8mPxk-aQKbFmQ",
  authDomain: "elif-8372c.firebaseapp.com",
  projectId: "elif-8372c",
  storageBucket: "elif-8372c.firebasestorage.app",
  messagingSenderId: "1034453670630",
  appId: "1:1034453670630:web:8e3e4cb3f033d8bd2af927",
  measurementId: "G-KKD5CGG2YN"
};

// Initialize Firebase
import { getApps, getApp } from 'firebase/app';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app); // Export Firestore instance
