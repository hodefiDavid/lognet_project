
// controller/logInController.js

const userModel = require('../model/loginModel');

exports.login = (req, res) => {
    const { userEmail, password } = req.body;

    // Check if email exists in the database
    userModel.findByEmail(userEmail, (err, user) => {
        if (err) {
            console.error('Error finding user:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (!user || user.password !== password) {
            // If user not found or password is incorrect
            return res.status(401).send('Invalid email or password');
        }

        // Redirect user to dashboard if login is successful
        //res.redirect('/dashboard');
        res.sendFile('C:/Users/david/WebstormProjects/lognet/view/dashboard.html');
    });
};