  // Import the functions you need from the SDKs you need
  import { set, ref } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCCudR0ekZJpXDBObiP31lvtgwLSIoXJdI",
    authDomain: "project-0-9aa0c.firebaseapp.com",
    databaseURL: "https://project-0-9aa0c-default-rtdb.firebaseio.com",
    projectId: "project-0-9aa0c",
    storageBucket: "project-0-9aa0c.appspot.com",
    messagingSenderId: "497580938421",
    appId: "1:497580938421:web:59ca39e4ff2045f9571afc",
    measurementId: "G-7X1S57P354"
};

const app = initializeApp(firebaseConfig);

import {auth, db} from "C:\Users\DELL\OneDrive\Máy tính\Firebase\Firebase\firebase.config.js"

const database = getDatabase(app);

  const signup = document.getElementById("signup");
  
  signup.addEventListener("click",(e) => {
    e.preventDefault();
    let name = document.getElementById("name_sign").value;
    let email = document.getElementById("email_sign").value;
    let password = document.getElementById("password_sign").value;
    let phone_number = document.getElementById("phone_number").value;
    let gender = document.getElementById("gender").value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
           const user = userCredential.user;
           console.log(user)
           set(ref(database,`user/${user.uid}`),{
                username: name,
                email: email,
           })
           alert("user created")
           window.location = "http://127.0.0.1:5500/Firebase/login.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
    });
})
