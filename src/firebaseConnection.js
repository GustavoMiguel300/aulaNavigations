import React from "react";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyD3uo2lbvewUKlypZf-Y_xsGBvsgyikh9Q",
  authDomain: "tarefas-14264.firebaseapp.com",
  projectId: "tarefas-14264",
  storageBucket: "tarefas-14264.appspot.com",
  messagingSenderId: "252871489516",
  appId: "1:252871489516:web:c2221e586dc89f7af1b2c9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
export default firebase;