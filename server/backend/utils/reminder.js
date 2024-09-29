const schedule = require('node-schedule');
const notifier = require('node-notifier');

// Function to set a medication reminder
const setReminder = (reminderData) => {
    const { time, days, medicationId, userId } = reminderData;

    // Convert the time and days into a cron expression
    const [hour, minute] = time.split(':'); // Assuming time is in HH:mm format
    const cronDays = days.join(','); // Assuming days is an array of integers (0 for Sunday, 6 for Saturday)

    // Cron format: minute, hour, day of month, month, day of week
    const cronExpression = `${minute} ${hour} * * ${cronDays}`;

    // Schedule the reminder
    schedule.scheduleJob(cronExpression, () => {
        notifier.notify({
            title: 'Medication Reminder',
            message: `Time to take your medication for ${medicationId}!`,
            sound: true, // Only works on macOS
            wait: true // Wait for user action
        });
    });

    console.log(`Reminder set for medication ${medicationId} at ${time} on days ${days}`);
};

module.exports = setReminder;
