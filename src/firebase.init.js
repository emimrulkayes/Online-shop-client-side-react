// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhYxZQp2Ibw16P0uITV0exZW9vS1QM6C8",
  authDomain: "online-shop-cfccb.firebaseapp.com",
  projectId: "online-shop-cfccb",
  storageBucket: "online-shop-cfccb.appspot.com",
  messagingSenderId: "984617189068",
  appId: "1:984617189068:web:ff6b9b0099d090b5204c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;