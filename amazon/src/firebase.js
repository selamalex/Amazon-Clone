// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO0gXO0VJVRVgKxQOlUFDcN1L6fjBWz1Y",
    authDomain: "clone-3609e.firebaseapp.com",
    projectId: "clone-3609e",
    storageBucket: "clone-3609e.appspot.com",
    messagingSenderId: "686601209954",
    appId: "1:686601209954:web:0b954bda453affe399293b",
    measurementId: "G-YH5H4P8YWJ"
  };
  
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
export { auth, db };

