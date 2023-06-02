import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyADDxbsLh5cW1S6d4ehItDyPPOUFqR1YpA",
  authDomain: "heads-1c43f.firebaseapp.com",
  projectId: "heads-1c43f",
  storageBucket: "heads-1c43f.appspot.com",
  messagingSenderId: "673313634881",
  appId: "1:673313634881:web:0503456bc28ff1b6bd64c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;