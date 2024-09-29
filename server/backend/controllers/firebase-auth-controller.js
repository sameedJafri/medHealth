const {
    clientAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail
} = require('../firebase/firebaseConfig');

const auth = clientAuth;

class FirebaseAuthController {
    async registerUser(req, res) {
        const { email, password, firstName, lastName, age, weight, gender, height } = req.body;
        if (!email || !password) {
            return res.status(422).json({
                email: "Email is required",
                password: "Password is required",
            });
        }
        try {
            // Step 1: Register user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);

            // Step 2: Get the registered user's unique ID
            const userId = userCredential.user.uid;

            // Step 3: Save user's details to Firebase Realtime Database
            await set(ref(db, 'users/' + userId), {
                uid: userId,
                firstName,
                lastName,
                age,
                weight,
                gender,
                height,
                email,
            });

            // Step 4: Send verification email
            await sendEmailVerification(userCredential.user);

            // Step 5: Respond with success
            res.status(201).json({
                message: "Verification email sent! User created successfully!",
                uid: userId,
                email: email,
            });
        } catch (error) {
            console.error("Error adding user:", error);
            res.status(500).json({ error: error.message });
        }
    }


    loginUser(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({
                email: "Email is required",
                password: "Password is required",
            });
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const idToken = userCredential._tokenResponse.idToken
                if (idToken) {
                    res.cookie('access_token', idToken, {
                        httpOnly: true
                    });
                    res.status(200).json({ message: "User logged in successfully", userCredential });
                } else {
                    res.status(500).json({ error: "Internal Server Error" });
                }
            })
            .catch((error) => {
                console.error(error);
                const errorMessage = error.message || "An error occurred while logging in";
                res.status(500).json({ error: errorMessage });
            });
    }

    logoutUser(req, res) {
        signOut(auth)
            .then(() => {
                res.clearCookie('access_token');
                res.status(200).json({ message: "User logged out successfully" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            });
    }

    resetPassword(req, res) {
        const { email } = req.body;
        if (!email) {
            return res.status(422).json({
                email: "Email is required"
            });
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                res.status(200).json({ message: "Password reset email sent successfully!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ error: "Internal Server Error" });
            });
    }
}

module.exports = new FirebaseAuthController();