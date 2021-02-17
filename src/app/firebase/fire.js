import firebase from 'firebase'
import 'firebase/firebase-firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCsmUIAN3Zb35Vje8cwBRxg2NuGDJXFrxQ",
    authDomain: "moviewatch-bf1ae.firebaseapp.com",
    projectId: "moviewatch-bf1ae",
    storageBucket: "moviewatch-bf1ae.appspot.com",
    messagingSenderId: "805087401380",
    appId: "1:805087401380:web:d610e95353c003560ddd31"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export { db, fire }