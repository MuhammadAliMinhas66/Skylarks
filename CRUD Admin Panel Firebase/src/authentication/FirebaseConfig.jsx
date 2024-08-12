
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi_9tec8AnkueOGue7UiV_-VeFs6HOpBE",
  authDomain: "adminconsoleproject-d658d.firebaseapp.com",
  projectId: "adminconsoleproject-d658d",
  storageBucket: "adminconsoleproject-d658d.appspot.com",
  messagingSenderId: "1005611556330",
  appId: "1:1005611556330:web:e58d4faace06ed2af9a693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);