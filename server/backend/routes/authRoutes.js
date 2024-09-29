
const express = require('express');
const firebaseAuthController = require('../controllers/firebase-auth-controller');
const verifyToken = require('../middleware/token')

const router = express.Router();

// register route
router.post('/register', (req, res) => firebaseAuthController.registerUser(req, res));

// login route
router.post('/login', (req, res) => firebaseAuthController.loginUser(req, res));

// logout route (protected)
router.post('/logout', verifyToken, (req, res) => firebaseAuthController.logoutUser(req, res));

// reset password route (protected)
router.post('/reset-password', verifyToken, (req, res) => firebaseAuthController.resetPassword(req, res));

module.exports = router;
