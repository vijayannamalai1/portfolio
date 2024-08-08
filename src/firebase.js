import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChDyDgQCHtxYHoZ8p-MfTUUaXH7d1eAVg",
  authDomain: "portfolio-7df49.firebaseapp.com",
  projectId: "portfolio-7df49",
  storageBucket: "portfolio-7df49.appspot.com",
  messagingSenderId: "986163512432",
  appId: "1:986163512432:web:fee2570e508d242247e0b5",
  measurementId: "G-7ESKEE7X37"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const timestamp = serverTimestamp();

export { db, timestamp };
