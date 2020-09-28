// firebase.js
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3G6qV9cx0Yioxp_n8ENpLBOphrKs80I8",
  authDomain: "forbidden-lands-char-sheet.firebaseapp.com",
  databaseURL: "https://forbidden-lands-char-sheet.firebaseio.com",
  projectId: "forbidden-lands-char-sheet",
  storageBucket: "forbidden-lands-char-sheet.appspot.com",
  messagingSenderId: "934905679586",
  appId: "1:934905679586:web:a73412ee865e4d0907d8bb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize login
const provider = new firebase.auth.GoogleAuthProvider();

// this exports the CONFIGURED version of firebase
export default firebase;

// login function
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

// initialize authorization function
export const auth = firebase.auth();
