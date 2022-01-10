import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQmcT-eHuyFGNb7cRvRn30qu30tg1oOoA",
    authDomain: "game-ffe5e.firebaseapp.com",
    projectId: "game-ffe5e",
    storageBucket: "game-ffe5e.appspot.com",
    messagingSenderId: "700118919110",
    appId: "1:700118919110:web:961a3ced3708875627f4c7"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { db, firebase }