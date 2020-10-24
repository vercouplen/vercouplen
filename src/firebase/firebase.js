import * as firebase from 'firebase';
import React from 'react';
import '@firebase/firestore';

<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_8Y0gc75wybv00PN2X2ZS0O4-j94EQto",
    authDomain: "vercouplen.firebaseapp.com",
    databaseURL: "https://vercouplen.firebaseio.com",
    projectId: "vercouplen",
    storageBucket: "vercouplen.appspot.com",
    messagingSenderId: "648584206579",
    appId: "1:648584206579:web:c482cac630ad80b348ff86",
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default { db };