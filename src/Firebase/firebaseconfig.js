import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkaVjh0r7yyLWikIj1oIJ4nx1EOqkkNHc",
  authDomain: "auth-90d5f.firebaseapp.com",
  projectId: "auth-90d5f",
  storageBucket: "auth-90d5f.appspot.com",
  messagingSenderId: "1044539955305",
  appId: "1:1044539955305:web:d85ed748da8ae3843caaf8",
  measurementId: "G-5FTD86ER6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;