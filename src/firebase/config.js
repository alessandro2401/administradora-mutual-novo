import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEyk14eOK9Pythqp1O5IkVKLtAqgsto4s",
  authDomain: "administradoramutual.firebaseapp.com",
  projectId: "administradoramutual",
  storageBucket: "administradoramutual.firebasestorage.app",
  messagingSenderId: "387128781383",
  appId: "1:387128781383:web:498e7fe0ec2fdf3f2adf62",
  measurementId: "G-XRNDYNRGFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

