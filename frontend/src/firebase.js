import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";     // for vite-ssg
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp as firestoreServerTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

async function initAnalytics() {
  if (await isSupported()) {
    const analytics = getAnalytics();
    // analytics - init method or event 
  } else {
    // Not supported in this environment
    console.log("Firebase Analytics not supported here.");
  }
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID,
    measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export
export { 
    app, 
    db, 
    auth, 
    firestoreServerTimestamp as serverTimestamp 
};
