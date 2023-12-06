// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAYKFWCITaze69vHlDtiN_MJ95Z1jl5ML4",
 authDomain: "finance-frontier-73551.firebaseapp.com",
 projectId: "finance-frontier-73551",
 storageBucket: "finance-frontier-73551.appspot.com",
 messagingSenderId: "32196896585",
 appId: "1:32196896585:web:21de207809aa8db6489c98",
 measurementId: "G-MMMQS7H1GC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth(app);
export {app,auth}