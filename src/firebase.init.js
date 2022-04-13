// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBur-E_ae3mNCJmg6VqM60w7qo2WHDVmbQ",
  authDomain: "ph-motel-trivago.firebaseapp.com",
  projectId: "ph-motel-trivago",
  storageBucket: "ph-motel-trivago.appspot.com",
  messagingSenderId: "385630985177",
  appId: "1:385630985177:web:a41cc24bb6fe107fc817c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;