const {getOtpByEmail, updateCustomerPassword} = require("../model/dbModel");


async function resetPassword(req, res) {
    const {userEmail,OTPCode,newPassword} = req.body;

    try {
        // Check if email exists in the database
        let userOtp = await getOtpByEmail(userEmail);

        if (!userOtp || userOtp.otpcode !== OTPCode) {
            return res.status(401).send('Invalid email or OTPCode');
        }

        const currentDate = new Date();
        const loadedDate = new Date(userOtp.date);

        const differenceInMilliseconds = currentDate - loadedDate;
        const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

        if(differenceInMinutes < 6) {
            await updateCustomerPassword(userEmail,newPassword);
        }else {
            return res.status(401).send('OTP out of date, please consider to send it again');
        }
        res.sendFile('C:/Users/david/WebstormProjects/lognet/view/updateSuccessfully.html');
    } catch (error) {
        console.error('Error during sending OTP:', error);
        res.status(500).send('Internal server error');
    }
}


module.exports = resetPassword;
