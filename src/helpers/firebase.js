// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASNZV949x3P-5Iw-POmF1urwh4Z-inCoQ",
  authDomain: "fucking-media.firebaseapp.com",
  projectId: "fucking-media",
  storageBucket: "fucking-media.appspot.com",
  messagingSenderId: "648224238405",
  appId: "1:648224238405:web:5b73d92779f8b537a62c2c",
  measurementId: "G-P0RWZ4CF5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);