 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 
 import {getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDJTSqbeoLw8LaCXl4J_-zpP-4Kx7p2J8g",
   authDomain: "capitalsx-ba309.firebaseapp.com",
   projectId: "capitalsx-ba309",
   storageBucket: "capitalsx-ba309.appspot.com",
   messagingSenderId: "373676950077",
   appId: "1:373676950077:web:48480606b55d545e94a054",
   measurementId: "G-LKZZM1BRMP"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)


 