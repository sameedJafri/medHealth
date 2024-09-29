
// firebase client SDK (frontend)
const { initializeApp } = require("firebase/app");
const { getStorage } = require('firebase/storage');

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
    appId: "1:466681565691:web:671c165911d28502927b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const clientAuth = getAuth(app);

// firebase admin sdk (backend)
const admin = require("firebase-admin");
require('dotenv').config();

// path to service account key
const path = require('path')
const serviceAccountPath = path.resolve(__dirname, 'medhealth-32c58-firebase-adminsdk-cvxqh-18f51f07e8.json');
//const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || './medhealth-32c58-firebase-adminsdk-cvxqh-18f51f07e8.json';
const serviceAccount = require(serviceAccountPath);

// init firebase admin 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://medhealth-32c58.appspot.com"
});

const db = admin.firestore();
console.log('fire db intialized', db)

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