import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfgdMW2fEH_idkALfssyRWKnejVtKIMmU",
    authDomain: "login-and-signup-assignment.firebaseapp.com",
    projectId: "login-and-signup-assignment",
    storageBucket: "login-and-signup-assignment.appspot.com",
    messagingSenderId: "577278972473",
    appId: "1:577278972473:web:4f3633223be305d13a73e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);