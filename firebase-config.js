// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyCK1womBB1YrjyLdzr7PGc4p_csRD2goH8",

  authDomain: "calcalorias.firebaseapp.com",

  projectId: "calcalorias",

  storageBucket: "calcalorias.appspot.com",

  messagingSenderId: "608438906296",

  appId: "1:608438906296:web:2d880fd6e9134fa287734d",

  measurementId: "G-5QP1LMSEBW"

};

const application = initializeApp(firebaseConfig)

export const auth = getAuth(application)

export const db = getFirestore(application);


// Initialize Firebase

//const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);