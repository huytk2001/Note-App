// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOUU9qb9trOFsA4b0PomW45b95WM9Z-cE",
  authDomain: "note-app-b4f7a.firebaseapp.com",
  projectId: "note-app-b4f7a",
  storageBucket: "note-app-b4f7a.firebasestorage.app",
  messagingSenderId: "742267122210",
  appId: "1:742267122210:web:b1d93a35911bbf8326907b",
  measurementId: "G-ENB2BHGR1R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
