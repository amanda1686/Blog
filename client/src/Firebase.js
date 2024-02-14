// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6f42c.firebaseapp.com",
  projectId: "mern-blog-6f42c",
  storageBucket: "mern-blog-6f42c.appspot.com",
  messagingSenderId: "643223755260",
  appId: "1:643223755260:web:484cd22115110c05fbfa79"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);