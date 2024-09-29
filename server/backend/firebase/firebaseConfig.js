// firebase client SDK (frontend)
const { initializeApp } = require("firebase/app");
const { getStorage } = require('firebase/storage');
const { getDatabase } = require('firebase/database'); // Import getDatabase
const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail
} = require("firebase/auth");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBebL0jCpInvnS_SZv0ca068niMsjoZDOI",
    authDomain: "medhealth-32c58.firebaseapp.com",
    projectId: "medhealth-32c58",
    storageBucket: "medhealth-32c58.appspot.com",
    messagingSenderId: "466681565691",
    appId: "1:466681565691:web:671c165911d28502927b5e",
    databaseURL: "https://medhealth-32c58-default-rtdb.firebaseio.com" // Ensure this is set
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const clientAuth = getAuth(app);
const database = getDatabase(app); // Initialize Realtime Database

// firebase admin sdk (backend)
const admin = require("firebase-admin");
require('dotenv').config();

// path to service account key
const path = require('path')
const serviceAccountPath = path.resolve(__dirname, 'medhealth-32c58-firebase-adminsdk-cvxqh-18f51f07e8.json');
const serviceAccount = require(serviceAccountPath);

// init firebase admin 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://medhealth-32c58-default-rtdb.firebaseio.com" // Ensure this is set
});

const db = admin.database(); // Initialize Realtime Database for admin
console.log('Realtime Database initialized', db)

// export app and admin 
module.exports = {
    clientAuth,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    admin,
    db
};
