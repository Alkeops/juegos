
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKSGTFOP3OY9Ji86KcCzyrRAQGVLoXMzk",
  authDomain: "aidas-ec70a.firebaseapp.com",
  projectId: "aidas-ec70a",
  storageBucket: "aidas-ec70a.appspot.com",
  messagingSenderId: "876210800563",
  appId: "1:876210800563:web:0b8d91c4d55900db8b2dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore
export const db = getFirestore(app);