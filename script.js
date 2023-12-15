// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ZVJw5Xjl6EJSJUK-_MwWwToMX1NNRpM",
  authDomain: "tpcloudhtml.firebaseapp.com",
  projectId: "tpcloudhtml",
  storageBucket: "tpcloudhtml.appspot.com",
  messagingSenderId: "391306792285",
  appId: "1:391306792285:web:73b143c1e156c28f7dacb4",
  measurementId: "G-HW99B20Y4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);