// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeqjBXGvsHm4HugjTNgzoJ4F9JytuP2co",
  authDomain: "chat-90cd0.firebaseapp.com",
  projectId: "chat-90cd0",
  storageBucket: "chat-90cd0.appspot.com",
  messagingSenderId: "66785540405",
  appId: "1:66785540405:web:bb59693236ec6cd2ebb47c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);