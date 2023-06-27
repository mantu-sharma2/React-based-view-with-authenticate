import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8D4zfbCHZtmA9MJML6jpQdrG8fo73Gn4",
  authDomain: "fir-auth-b7ca9.firebaseapp.com",
  projectId: "fir-auth-b7ca9",
  storageBucket: "fir-auth-b7ca9.appspot.com",
  messagingSenderId: "476211005040",
  appId: "1:476211005040:web:84b40e1a933b64ff4ed6b5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
