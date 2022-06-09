// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXF0G9fBRGAvPJkBkEgSyrdUThNYkNCt4",
    authDomain: "twitter-clone-a4d45.firebaseapp.com",
    projectId: "twitter-clone-a4d45",
    storageBucket: "twitter-clone-a4d45.appspot.com",
    messagingSenderId: "533765374432",
    appId: "1:533765374432:web:ff50f8555f4200e4ca6b85",
    measurementId: "G-7NZGVYR2G0"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };