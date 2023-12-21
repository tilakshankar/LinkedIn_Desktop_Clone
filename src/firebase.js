import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBUsE8yR8Qs238fAXm7V-HFBw2kwWQT8Ts",
  authDomain: "linkedin-clonet.firebaseapp.com",
  projectId: "linkedin-clonet",
  storageBucket: "linkedin-clonet.appspot.com",
  messagingSenderId: "153494792669",
  appId: "1:153494792669:web:4fa42d26ce663e98f06e34",
  measurementId: "G-1PFDNJL3LV"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const firestore = app.firestore();

export { auth, firestore, firebase as default };



