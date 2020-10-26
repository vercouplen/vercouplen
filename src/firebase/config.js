// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//import firebase from '@react-native-firebase';
//import firebase from "firebase/app"

const firebase = require("firebase");

// Add the Firebase products that you want to use
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_8Y0gc75wybv00PN2X2ZS0O4-j94EQto",
  authDomain: "vercouplen.firebaseapp.com",
  databaseURL: "https://vercouplen.firebaseio.com",
  projectId: "vercouplen",
  storageBucket: "vercouplen.appspot.com",
  messagingSenderId: "648584206579",
  appId: "1:648584206579:web:f1c93546c094c47e48ff86",
  measurementId: "G-2N0506C9BB"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const analytics = firebase.analytics();

//import "firebase/firestore"
//import "firebase/analytics"

firebase.analytics();

export default db;
export {db, analytics};