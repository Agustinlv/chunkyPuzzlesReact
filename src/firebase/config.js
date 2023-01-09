// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQi_PzZEIOcOAiV7ri1Q_JNGI_9WFGfK0",
  authDomain: "silicon-keel-293316.firebaseapp.com",
  projectId: "silicon-keel-293316",
  storageBucket: "silicon-keel-293316.appspot.com",
  messagingSenderId: "945360462708",
  appId: "1:945360462708:web:a9832968ba87a11bd10221",
  measurementId: "G-NHQQSP1EHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const initFirestore = () => app;
