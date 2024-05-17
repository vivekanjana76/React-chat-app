import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-302f5.firebaseapp.com",
  projectId: "reactchat-302f5",
  storageBucket: "reactchat-302f5.appspot.com",
  messagingSenderId: "609661480369",
  appId: "1:609661480369:web:c94ed7162e362bdd83e190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()