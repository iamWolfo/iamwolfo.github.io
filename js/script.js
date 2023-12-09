// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAVOGX_YX7y1HX8gT70Dkqt9tKorEpvtw",
  authDomain: "iamwolfo-ab738.firebaseapp.com",
  projectId: "iamwolfo-ab738",
  storageBucket: "iamwolfo-ab738.appspot.com",
  messagingSenderId: "972233194087",
  appId: "1:972233194087:web:501b5e024c606d4ad5b2c2",
  measurementId: "G-YJX1N264MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);