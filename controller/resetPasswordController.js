const {getOtpByEmail, upsertCustomerPassword, upsertCustomerOTP} = require("../model/dbModel");
const makeOTP = require("../model/otpModel");

// async function resetPassword(req, res) {
//     const { userEmail, action } = req.body;
//
//     if (action === 'reset') {
//         const { OTPCode, newPassword } = req.body;
//         // Perform reset password logic
//         res.send('Password reset successfully.');
//     } else if (action === 'sendOTP') {
//         // Send OTP logic
//         res.send({ message: 'OTP code sent to your email.' });
//     } else {
//         res.status(400).send('Invalid action');
//     }
// }
//
// module.exports = { resetPassword };

async function resetPassword(req, res){

    const { userEmail, action } = req.body;

    if (action === 'reset') {
        const { OTPCode,newPassword } = req.body;
        let user = await getOtpByEmail(userEmail);

        // await upsertCustomerPassword(userEmail, newPassword)
        // console.log("user.otp ="+ user.otp)
        console.log("reset ")
        // Perform reset password logic

        res.send('Resetting password...');

    } else if (action === 'sendOTP') {

        console.log("sendOTP ")

        let newOtpCode = await makeOTP();

        const currentDate = new Date();
        const dateString = currentDate.toISOString();

        await upsertCustomerOTP(userEmail,newOtpCode,dateString);

        res.send({ message: 'OTP code sent to your email.' });

    } else {
        // Invalid action
        res.status(400).send('Invalid action');
    }
}



module.exports = resetPassword;


// Load the date back from the string
// const loadedDate = new Date("2024-02-15T15:45:44.384Z");
// const differenceInMilliseconds = currentDate - loadedDate;
// const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

// console.log("differenceInMinutes = " + differenceInMinutes);  // Original date object
// console.log(dateString);   // String representation
// console.log(loadedDate);   // Loaded date object
// Perform send OTP logic