// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const getCityById = require("./model/dbModel");

const loginController = require("./controller/logInController");
const signUpController = require("./controller/signUpController");
const sendMailController = require("./controller/mailController");
const weatherInfo = require("./controller/weatherController");
const makeOTP = require("./model/otpModel");
const sendOTPController = require("./controller/sendOTPController");
const resetPasswordController = require("./controller/resetPasswordController");

// Creating an instance of express
const app = express();
const port = 3000; // Port number the server will listen on

// Parse JSON bodies for form data
app.use(bodyParser.json());

// Parse URL-encoded bodies for form data
app.use(express.urlencoded({extended: true}));

// Serve static files from the 'public' directory
app.use(express.static('view/public'));

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.sendFile('C:/Users/david/WebstormProjects/lognet/view/public/logIn.html');
});

app.post('/signUp', signUpController);

app.post('/signIn', loginController);

app.post('/sendOTP', sendOTPController);

app.post('/resetPassword', resetPasswordController);


// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// ######################################################################################################################
// // Define a route handler sendmail
// app.post('/sendmail', sendMailController);
//
// app.get('/weatherinfo', weatherInfo);
// // Define a route handler for the root path
// app.get('/city', async (req, res) => {
//     let otp = await getCityById(req.query.id);
//     console.log("req.body.id = "+ req.query.id)
//     console.log(otp)
//
//     res.send('your otp code is ' + otp.name);
// });
//
// // Define a route handler for the root path
// app.get('/getotp', async (req, res) => {
//     let otp = await makeOTP();
//     res.send('your otp code is ' + otp);
// });

// ######################################################################################################################

