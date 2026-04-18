import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForLocalTesting12345678",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ajio-fit-check.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://ajio-fit-check-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ajio-fit-check",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ajio-fit-check.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:dummyappid123456",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-DUMMY12345"
};

let app: FirebaseApp;
let db: Database;

try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getDatabase(app);
} catch (error) {
  console.warn("Firebase initialization notice: Realtime Database not connected. (To enable Style Crew, configure Firebase keys in .env)");
}

export { db };