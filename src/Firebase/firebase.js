// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz7E6rvfMkAXEhZk57dsGk-6omScO23C0",
  authDomain: "eduskill-1c6e7.firebaseapp.com",
  projectId: "eduskill-1c6e7",
  storageBucket: "eduskill-1c6e7.firebasestorage.app",
  messagingSenderId: "891456123262",
  appId: "1:891456123262:web:9a12b3bec7d8b5d4f2032f",
  measurementId: "G-HTCKPJH060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;