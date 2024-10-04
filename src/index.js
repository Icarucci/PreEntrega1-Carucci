import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33Avh5kgJIQNfe5LF_BFfn_rr_bjyWDI",
  authDomain: "fcamisetas-2024.firebaseapp.com",
  projectId: "fcamisetas-2024",
  storageBucket: "fcamisetas-2024.appspot.com",
  messagingSenderId: "305799930089",
  appId: "1:305799930089:web:8d922c6d8be4e057f05078",
  measurementId: "G-3NR7ZKS4F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

const elemento = document.getElementById("root");

const root = ReactDOM.createRoot(elemento);




root.render(<App/>);

