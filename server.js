// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const getCityById = require("./model/dbModel");

const loginController = require("./controller/logInController");
const signUpController = require("./controller/signUpController");
const makeOTP = require("./model/otpModel");
const sendOTPController = require("./controller/sendOTPController");
const resetPasswordController = require("./controller/resetPasswordController");
const testRouter = require('./test');

// Creating an instance of express
const app = express();
const port = 3000; // Port number the server will listen on

// Parse JSON bodies for form data
app.use(bodyParser.json());

app.use('/test', testRouter);

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

app.use('/test', testRouter);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


