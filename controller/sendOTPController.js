// controller/logInController.js

const {getCustomerByEmail} = require('../model/dbModel');
const makeOTP = require("../model/otpModel");
const sendEmail = require("../model/mailModel");

async function sendOTP(req, res) {
    const {userEmail} = req.body;

    try {
        // Check if email exists in the database
        let userInfo = await getCustomerByEmail(userEmail);

        if (!userInfo) {
            return res.status(401).send('Invalid email or password');
        }
        let otpCode = await makeOTP();
        const subject = "Your OTP Code for Password Reset";
        let text =
            "Hello,\n" +
            "\n" +
            "You have requested a one-time password (OTP) for resetting your password. Please use the following OTP code to proceed:\n" +
            "\n" +
            "OTP Code:"+otpCode +"\n" +
            "\n" +
            "The OTP Code is valid only for 5 minutes"+
            "\n" +
            "If you did not request this OTP, please ignore this email.\n" +
            "\n" +
            "Thank you,\n" +
            "The LogNet Team";

        await sendEmail(userEmail, subject, text);

        res.sendFile('C:/Users/david/WebstormProjects/lognet/view/reset-password.html');
    } catch (error) {
        console.error('Error during sending OTP:', error);
        res.status(500).send('Internal server error');
    }
}

module.exports = sendOTP;
