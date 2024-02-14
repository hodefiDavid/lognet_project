
const nodemailer = require('nodemailer');
const { GMAIL_USER, GMAIL_PASS } = require('../env.js');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
    }
});

function sendEmail(to, subject, text) {
    let mailOptions = {
        from: 'LogNet@example.com',
        to: to,
        subject: subject,
        text: text
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log('Message sent: %s', info.messageId);
                resolve(info);
            }
        });
    });
}

module.exports = sendEmail;
