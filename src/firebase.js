// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCQl0P_S5v0UCRCdD_pOjJypdpGsVKTd8E",
    authDomain: "projects-2e4bb.firebaseapp.com",
    projectId: "projects-2e4bb",
    storageBucket: "projects-2e4bb.appspot.com",
    messagingSenderId: "229731806862",
    appId: "1:229731806862:web:2b6e10a5171741e945e3df",
    measurementId: "G-DZVXY5R686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);