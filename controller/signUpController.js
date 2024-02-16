
const { getCustomerByEmail, createNewCustomer} = require('../model/dbModel');

async function singUp(req, res) {
    const { userEmail, password ,firstName,lastName} = req.body;

    try {
        // Check if email exists in the database
        let userInfo = await getCustomerByEmail(userEmail);

        if (userInfo) {
            return res.status(401).send('email is already in use');
        }
        await createNewCustomer(userEmail,password,firstName,lastName)
        // Redirect user to dashboard if login is successful
        res.sendFile('C:/Users/david/WebstormProjects/lognet/view/dashboard.html');
    } catch (error) {
        console.error('Error during singUp:', error);
        res.status(500).send('Internal server error');
    }
}

module.exports = singUp;