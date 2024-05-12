
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCl3AG8sC6kcMhJTinHumusF3aIqipiegE",
    authDomain: "react-register-8bb10.firebaseapp.com",
    projectId: "react-register-8bb10",
    storageBucket: "react-register-8bb10.appspot.com",
    messagingSenderId: "883087568173",
    appId: "1:883087568173:web:26c8d455c102a5dbcab7a4",
    measurementId: "G-606SHXF94P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);