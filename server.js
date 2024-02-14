// Importing required modules
const express = require('express');
const loginController = require("./controller/logInController");
const bodyParser = require('body-parser');
const sendAuthCodeEmail = require("./controller/mailController");
const sendMailController = require("./controller/mailController");

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

// Define a route handler sendmail
app.post('/sendmail', sendMailController);

// Route for handling form submission
app.post('/signIn', loginController.login);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
