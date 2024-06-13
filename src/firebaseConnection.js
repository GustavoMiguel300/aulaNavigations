import React from "react";
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyCbGDZ7Cj8vyZn3EMi1WaBIO9J7O3F-2cQ",
  authDomain: "myapp-c820f.firebaseapp.com",
  databaseURL: "https://myapp-c820f-default-rtdb.firebaseio.com",
  projectId: "myapp-c820f",
  storageBucket: "myapp-c820f.appspot.com",
  messagingSenderId: "877056154848",
  appId: "1:877056154848:web:2b727e245c48c98a7ac485",
  measurementId: "G-XPN60FQ2DZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
export default firebase;