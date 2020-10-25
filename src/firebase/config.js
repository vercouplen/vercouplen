// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import React from 'react';
const firebase = require("firebase");

<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>

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
    appId: "1:648584206579:web:c482cac630ad80b348ff86",
    measurementId: "G-SM0155Q4EN",
  };
  
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var analytics = firebase.analytics();


export default {db, analytics};
