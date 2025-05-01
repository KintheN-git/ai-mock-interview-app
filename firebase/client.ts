import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi98l1o3U_onuEZPvA0ilVprh-LYrUVNM",
  authDomain: "ai-mock-interview-app-b6490.firebaseapp.com",
  projectId: "ai-mock-interview-app-b6490",
  storageBucket: "ai-mock-interview-app-b6490.firebasestorage.app",
  messagingSenderId: "753443434462",
  appId: "1:753443434462:web:22af85445e799e218ef74f",
  measurementId: "G-XF4QBF4B3W",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
