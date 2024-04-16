// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93GIIpzuz9SDdbKQoXBm3_wGubH_bz_s",
  authDomain: "react-auth-c8b8c.firebaseapp.com",
  projectId: "react-auth-c8b8c",
  storageBucket: "react-auth-c8b8c.appspot.com",
  messagingSenderId: "698883634096",
  appId: "1:698883634096:web:a2b1ad0446d565688bdc75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);