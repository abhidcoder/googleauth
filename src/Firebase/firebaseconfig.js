import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB11z6kUVcJTUzt4hYmoozHgAiinUP62HM",
  authDomain: "abhishek-s-your-aid.firebaseapp.com",
  projectId: "abhishek-s-your-aid",
  storageBucket: "abhishek-s-your-aid.appspot.com",
  messagingSenderId: "426957616019",
  appId: "1:426957616019:web:219fe33b0e57ca8459ae66",
  measurementId: "G-P2CPG52CV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
