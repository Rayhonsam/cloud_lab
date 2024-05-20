import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyA4G4Fr9FyCBGwglAWeRzqOn_LQSLj6vGk",
    authDomain: "fir-a6480.firebaseapp.com",
    projectId: "fir-a6480",
    storageBucket: "fir-a6480.appspot.com",
    messagingSenderId: "581685312719",
    appId: "1:581685312719:web:d6c46f1213b9060c668bba",
    measurementId: "G-DY925HRNFN"
  };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
var b3=document.getElementById('submit3');
b3.addEventListener("click",()=>
{
    
   

signOut(auth).then(() => {
    console.log("sign out");
   window.location.href = "index.html";
}).catch((error) => {
    console.log("error");
    console.log(error);
});

   
});