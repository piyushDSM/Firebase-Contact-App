// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn3VsUAoXJIUWxkKdZIH7LyRDsMBz3jXA",
  authDomain: "contact-manager-af4f2.firebaseapp.com",
  projectId: "contact-manager-af4f2",
  storageBucket: "contact-manager-af4f2.appspot.com",
  messagingSenderId: "988832713250",
  appId: "1:988832713250:web:f9ae7292e316f00f53d87b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)