import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtOsJIqoj_eNQq27YLh3SxnFBLpetmAwY",
  authDomain: "interviewprep-ai-53d92.firebaseapp.com",
  projectId: "interviewprep-ai-53d92",
  storageBucket: "interviewprep-ai-53d92.firebasestorage.app",
  messagingSenderId: "842775824379",
  appId: "1:842775824379:web:40f200c83839769c186d5e",
  measurementId: "G-HQF91GZDXN",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
