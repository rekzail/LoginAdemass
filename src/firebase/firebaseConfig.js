// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDGN7ArzAkQ4d34GRNUUkKNyOOyv-e-Fk",
  authDomain: "loginademass.firebaseapp.com",
  projectId: "loginademass",
  storageBucket: "loginademass.appspot.com",
  messagingSenderId: "463903837737",
  appId: "1:463903837737:web:f94caf14e733449f97d638"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export default auth