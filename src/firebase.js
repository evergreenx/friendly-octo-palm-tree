import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqJ1n35jijJkBDo2iRQ5rJlYu7tSkCW98",
  authDomain: "image-upload-9a257.firebaseapp.com",
  databaseURL: "https://image-upload-9a257.firebaseio.com",
  projectId: "image-upload-9a257",
  storageBucket: "image-upload-9a257.appspot.com",
  messagingSenderId: "602998381201",
  appId: "1:602998381201:web:1d51b95255ee59ee31bd30",
  measurementId: "G-CT4S1LVWQ9",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
