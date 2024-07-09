// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-eTRxsngOPqjxB_owtnRng3R36kF82p0",
  authDomain: "clone-6346b.firebaseapp.com",
  projectId: "clone-6346b",
  storageBucket: "clone-6346b.appspot.com",
  messagingSenderId: "247261774934",
  appId: "1:247261774934:web:5ae4ecdf1dfe600547a7f7",
  measurementId: "G-9DH9WT5EG8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
