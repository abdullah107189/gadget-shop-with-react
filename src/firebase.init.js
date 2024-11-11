// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKbgUr84sKyi3xZqInedhKTGJ_7h1pIvI",
    authDomain: "simple-firebase-56290.firebaseapp.com",
    projectId: "simple-firebase-56290",
    storageBucket: "simple-firebase-56290.firebasestorage.app",
    messagingSenderId: "811926890921",
    appId: "1:811926890921:web:6b59b1cdc14ef5cf9ffcb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
