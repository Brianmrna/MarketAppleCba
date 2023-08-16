// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCMCVCTR34CfG8muMtbMGYEYUmbucyassI",
  authDomain: "marketapplecba.firebaseapp.com",
  projectId: "marketapplecba",
  storageBucket: "marketapplecba.appspot.com",
  messagingSenderId: "20124017381",
  appId: "1:20124017381:web:34f165661e8d5385ca6a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)