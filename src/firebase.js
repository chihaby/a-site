import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initialize database

const config = {
  apiKey: process.env.REACT_APP_ANDREA_API_KEY,
  authDomain: "andrea-5aa16.firebaseapp.com",
  databaseURL: "https://andrea-5aa16.firebaseio.com",
  projectId: "andrea-5aa16",
  storageBucket: "andrea-5aa16.appspot.com",
  messagingSenderId: "270969450365",
  appId: "1:270969450365:web:e439cf773fbcd99f0f6614",
  measurementId: "G-HVCMBT59PQ"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

// firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;