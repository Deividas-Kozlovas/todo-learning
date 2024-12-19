import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDOHjEQF2ywHyJetfk2VeTvxxmJDjfDEHo",
  authDomain: "learning-todo-9153c.firebaseapp.com",
  projectId: "learning-todo-9153c",
  storageBucket: "learning-todo-9153c.firebasestorage.app",
  messagingSenderId: "956316306529",
  appId: "1:956316306529:web:e0668138787ee677742e20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth and firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export services for use elsewhere
export { auth, db, app };
