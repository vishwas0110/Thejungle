// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD9WJLWZEZ8qidNubm2Byd3l5U2PvhSfI",
  authDomain: "jungle-54bdd.firebaseapp.com",
  projectId: "jungle-54bdd",
  storageBucket: "jungle-54bdd.appspot.com",
  messagingSenderId: "726838000333",
  appId: "1:726838000333:web:44abc3e8789c825b87c784",
  measurementId: "G-K0K64NJ04T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

export default storage;