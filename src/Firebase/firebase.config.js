// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRZRTuPLNAbRF6W1JpE_CZ9hMRDhTpJK0",
  authDomain: "automotive-project-a89be.firebaseapp.com",
  projectId: "automotive-project-a89be",
  storageBucket: "automotive-project-a89be.appspot.com",
  messagingSenderId: "377762642138",
  appId: "1:377762642138:web:00b5db88855d68c8d64de3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
