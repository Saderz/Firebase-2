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

export const database = getDatabase(app);
export const auth = getAuth(app)
export const db = getFirestore(app)