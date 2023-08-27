import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const login = document.getElementById("login");

login.addEventListener("click",(event) => {
    event.preventDefault();
    const auth = getAuth();
    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            const user = userCredential.user;
            window.location = "https://www.facebook.com";
            console.log("Success");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})