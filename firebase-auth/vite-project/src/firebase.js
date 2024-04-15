
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBnF7mxvduLqSzUB2NWCJOtiQOK0geqBpE",
  authDomain: "mongo-auth-f2fca.firebaseapp.com",
  projectId: "mongo-auth-f2fca",
  storageBucket: "mongo-auth-f2fca.appspot.com",
  messagingSenderId: "117953571784",
  appId: "1:117953571784:web:37b839988f9146fbc0eefd",
  measurementId: "G-CQ86TV7TQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;