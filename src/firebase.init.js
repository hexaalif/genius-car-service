// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOvAIwh223aCgpcggGmlF24B-Cz_IaCgY",
  authDomain: "genius-car-services-502b5.firebaseapp.com",
  projectId: "genius-car-services-502b5",
  storageBucket: "genius-car-services-502b5.appspot.com",
  messagingSenderId: "70419317825",
  appId: "1:70419317825:web:84b3b10afd2a75bbdeb2c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
