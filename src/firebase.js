import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8uYQ7ymzOWRvopr13SkQfAz2yM1g0kZw",
  authDomain: "vacctrak.firebaseapp.com",
  projectId: "vacctrak",
  storageBucket: "vacctrak.appspot.com",
  messagingSenderId: "256787724393",
  appId: "1:256787724393:web:45b9e663a6d02d1a2e4af8",
  measurementId: "G-Q8SCKTC73T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default firebase;
export { db, auth };
