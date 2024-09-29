// client/frontend/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBebL0jCpInvnS_SZv0ca068niMsjoZDOI",
    authDomain: "medhealth-32c58.firebaseapp.com",
    projectId: "medhealth-32c58",
    storageBucket: "medhealth-32c58.appspot.com",
    messagingSenderId: "466681565691",
    appId: "1:466681565691:web:671c165911d28502927b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore and Auth instances
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
