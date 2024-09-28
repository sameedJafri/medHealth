// routes/medicationRoutes.js
const express = require('express');
const multer = require('multer');
const { db, admin } = require('../firebase/firebaseConfig')
const verifyToken = require('../middleware/token'); // To verify user authentication
const router = express.Router();


const upload = multer({ storage: multer.memoryStorage() }); // To handle file uploads

// Add a new medication manually
// Add a new medication (manually or with a photo)
router.post('/add-photo', verifyToken, upload.single('photo'), async (req, res) => {
    const { drugName, dosage, frequency, reminders } = req.body;
    const userId = req.user.uid;
    const photo = req.file;

    try {
        let photoUrl = null;

        // Step 1: If a photo is provided, upload it to Firebase Storage
        if (photo) {
            const bucket = admin.storage().bucket();
            const fileName = `medications/${userId}/${Date.now()}_${photo.originalname}`;
            const file = bucket.file(fileName);
            const stream = file.createWriteStream({
                metadata: {
                    contentType: photo.mimetype,
                },
            });

            // Handle the stream events to upload the photo
            await new Promise((resolve, reject) => {
                stream.on('error', (error) => {
                    console.error('Error uploading photo:', error);
                    reject('Error uploading photo');
                });

                stream.on('finish', () => {
                    photoUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
                    resolve();
                });

                stream.end(photo.buffer);
            });
        }

        // Step 2: Create the new medication object
        const newMedication = {
            userId,
            drugName,
            dosage,
            frequency,
            reminders,
            photo: photoUrl, // This will be null if no photo is provided
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        };

        // Step 3: Save the new medication to Firestore
        const docRef = await db.collection('medications').add(newMedication);
        res.status(201).json({ message: "Medication added successfully", medicationId: docRef.id });

    } catch (error) {
        console.error("Error adding medication:", error);
        res.status(500).json({ error: "Error adding medication" });
    }
});

router.post('/add', verifyToken, async (req, res) => {
    const { drugName, dosage, frequency, reminders } = req.body;
    const userId = req.user.uid;

    try {
        const newMedication = {
            userId,
            drugName,
            dosage,
            frequency,
            reminders,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        };
        const docRef = await db.collection('medications').add(newMedication);
        res.status(201).json({ message: "Medication added successfully", medicationId: docRef.id });
    } catch (error) {
        console.error("Error adding medication:", error);
        res.status(500).json({ error: "Error adding medication" });
    }
});

// Get all medications for the authenticated user
router.get('/list', verifyToken, async (req, res) => {
    const userId = req.user.uid;

    try {
        const medications = await Medication.find({ userId });
        res.status(200).json({ medications });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching medications" });
    }
});

// Edit a medication
router.put('/edit/:id', verifyToken, upload.single('photo'), async (req, res) => {
    const { id } = req.params;
    const { drugName, dosage, frequency, reminders } = req.body;
    const userId = req.user.uid;
    const photo = req.file;

    try {
        // Fetch the existing medication document
        const medicationRef = db.collection('medications').doc(id);
        const doc = await medicationRef.get();

        if (!doc.exists) {
            return res.status(404).json({ error: "Medication not found" });
        }

        const medicationData = doc.data();
        let updatedData = {
            drugName,
            dosage,
            frequency,
            reminders,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        };

        if (photo) {
            // Step 1: Delete the old photo if it exists
            if (medicationData.photo) {
                const oldPhotoPath = medicationData.photo.split('.appspot.com/')[1];
                const oldPhotoFile = admin.storage().bucket().file(oldPhotoPath);
                await oldPhotoFile.delete().catch((err) => {
                    console.error('Error deleting old photo:', err);
                });
            }

            // Step 2: Upload the new photo to Firebase Storage
            const bucket = admin.storage().bucket();
            const newFileName = `medications/${userId}/${Date.now()}_${photo.originalname}`;
            const newFile = bucket.file(newFileName);
            const stream = newFile.createWriteStream({
                metadata: {
                    contentType: photo.mimetype,
                },
            });

            stream.on('error', (error) => {
                console.error('Error uploading new photo:', error);
                return res.status(500).json({ error: 'Error uploading new photo' });
            });

            stream.on('finish', async () => {
                const photoUrl = "https://storage.googleapis.com/${bucket.name}/${newFile.name}";

                // Step 3: Update Firestore with the new photo URL
                updatedData.photo = photoUrl;

                // Update Firestore document with new data
                await medicationRef.update(updatedData);
                res.status(200).json({ message: "Medication updated successfully with new photo" });
            });

            stream.end(photo.buffer);
        } else {
            // No new photo provided, simply update the rest of the medication data
            await medicationRef.update(updatedData);
            res.status(200).json({ message: "Medication updated successfully" });
        }
    } catch (error) {
        console.error("Error updating medication:", error);
        res.status(500).json({ error: "Error updating medication" });
    }
});

// Delete a medication
router.delete('/delete/:id', verifyToken, async (req, res) => {
    const { id } = req.params;

    try {
        await Medication.findByIdAndDelete(id);
        res.status(200).json({ message: "Medication deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting medication" });
    }
});

module.exports = router;
