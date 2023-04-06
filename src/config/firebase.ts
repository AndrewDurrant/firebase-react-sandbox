import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUfw0QTqLFqOu9Nd0apnLnOkydpU6dBLw",
  authDomain: "fir-frontend-137d1.firebaseapp.com",
  projectId: "fir-frontend-137d1",
  storageBucket: "fir-frontend-137d1.appspot.com",
  messagingSenderId: "642143690818",
  appId: "1:642143690818:web:75b0796898399b9e0ecddb",
  measurementId: "G-EFNH1Y2H1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
