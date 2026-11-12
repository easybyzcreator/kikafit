import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr4ZXIZpFS25gvgL69Q7a84s-4vepa7wQ",
  authDomain: "app-kika-fit.firebaseapp.com",
  projectId: "app-kika-fit",
  storageBucket: "app-kika-fit.firebasestorage.app",
  messagingSenderId: "1056624986175",
  appId: "1:1056624986175:web:7aa6faa846dad27cd8908a",
  measurementId: "G-YFMW4QNPET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

