

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT1y6ZcfuAvRAWnjgUSYqie3zkxs4IhFY",
  authDomain: "projetfirebasecloud.firebaseapp.com",
  projectId: "projetfirebasecloud",
  storageBucket: "projetfirebasecloud.appspot.com",
  messagingSenderId: "263860026087",
  appId: "1:263860026087:web:2cdbb1839bb5b952790042",
  measurementId: "G-63B1SVXLFZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);