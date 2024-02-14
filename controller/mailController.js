// server.js
const sendEmail = require('../model/mailModel');

async function sendMailController(req, res) {

    try {
        await sendEmail(to, subject, text);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email' });
    }
}

module.exports = sendMailController;
