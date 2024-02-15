// controller/logInController.js

const { getCustomerByEmail } = require('../model/dbModel');

async function login(req, res) {
    const { userEmail, password } = req.body;

    try {
        // Check if email exists in the database
        let userInfo = await getCustomerByEmail(userEmail);

        if (!userInfo) {
            return res.status(401).send('Invalid email or password');
        }

        if (userInfo.password !== password) {
            return res.status(401).send('Invalid email or password');
        }

        // Redirect user to dashboard if login is successful
        res.sendFile('C:/Users/david/WebstormProjects/lognet/view/dashboard.html');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
}

module.exports = login;
