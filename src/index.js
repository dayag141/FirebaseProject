// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUSYl-uJ_RdrufxxMfIyfivVE3PJE9htg",
  authDomain: "fir-project-b4113.firebaseapp.com",
  projectId: "fir-project-b4113",
  storageBucket: "fir-project-b4113.appspot.com",
  messagingSenderId: "1084431294701",
  appId: "1:1084431294701:web:4b78a6891264803ae02ce4",
  measurementId: "G-BZGECNKJB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)