import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCnAZ-qFvM6EipbF4GVHwcQDxpoRgshgPQ",
  authDomain: "toodoo-81e7d.firebaseapp.com",
  projectId: "toodoo-81e7d",
  storageBucket: "toodoo-81e7d.appspot.com",
  messagingSenderId: "1006207424181",
  appId: "1:1006207424181:web:ad6ef3cd8b1e72366c10fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };