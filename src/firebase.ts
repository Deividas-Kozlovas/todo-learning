import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXByJnHD9oPXuvuR6Apiv23GbpTZsq9Wk",
  authDomain: "todo-test-847f1.firebaseapp.com",
  projectId: "todo-test-847f1",
  storageBucket: "todo-test-847f1.firebasestorage.app",
  messagingSenderId: "784341354950",
  appId: "1:784341354950:web:89bcd4085e673ce0644ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, app };
