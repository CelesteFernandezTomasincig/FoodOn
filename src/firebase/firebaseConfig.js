// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0EQsg1hPkmoO90nPnAg-hcQ9L7r7MpyM",
  authDomain: "foodon-e4f6f.firebaseapp.com",
  projectId: "foodon-e4f6f",
  storageBucket: "foodon-e4f6f.appspot.com",
  messagingSenderId: "898971376203",
  appId: "1:898971376203:web:bb2b49ecff267aec388bce",
  measurementId: "G-TGSEMS5EXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);