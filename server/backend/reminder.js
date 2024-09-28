// reminder.js
const schedule = require('node-schedule');
const notifier = require('node-notifier');

// Define the time for the reminder (e.g., 8:00 AM)
const reminderTime = '40 10 * * *'; // Cron format: minute hour day month weekday

// Function to send a notification
const sendNotification = () => {
    notifier.notify({
        title: 'Medication Reminder',
        message: 'Time to take your medication!',
        sound: true, // Only works on MacOS
        wait: true // Wait for user action
    });
};

// Schedule the reminder
schedule.scheduleJob(reminderTime, sendNotification);

console.log(`Medication reminder set for ${reminderTime}`);