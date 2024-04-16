
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY, 
  authDomain: "coqui-dev-pr24.firebaseapp.com",
  projectId: "coqui-dev-pr24",
  storageBucket: "coqui-dev-pr24.appspot.com",
  messagingSenderId: "615498309169",
  appId: "1:615498309169:web:283eec991e6100d2c2bf10",
  measurementId: "G-LCH2R9PGXP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);