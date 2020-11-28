import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyApnq-hypdGyu7byDjkSt--a3-J13VUVtU",
    authDomain: "barter-9e9e0.firebaseapp.com",
    databaseURL: "https://barter-9e9e0.firebaseio.com",
    projectId: "barter-9e9e0",
    storageBucket: "barter-9e9e0.appspot.com",
    messagingSenderId: "586373969588",
    appId: "1:586373969588:web:03787fc56cf0a7bb8a09e1"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()