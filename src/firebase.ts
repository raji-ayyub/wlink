// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOVfY1BPdjR8fpSug4Ky4fgJxB4cnNlsg",
    authDomain: "devlink-001.firebaseapp.com",
    projectId: "devlink-001",
    storageBucket: "devlink-001.appspot.com",
    messagingSenderId: "104965323471",
    appId: "1:104965323471:web:dffbb9a5f8568f4f4115ba",
    measurementId: "G-ZZC5X9NMZL"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
