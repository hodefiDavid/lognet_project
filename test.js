// test.js
const express = require('express');
const router = express.Router();
const sendEmail = require('./model/mailModel');
const makeOTP = require("./model/otpModel");
const getTmpCWeatherAPI = require("./model/weatherModel");
const {
    getCustomerByEmail, getOtpByEmail, getCityById, createNewCustomer,
    updateCustomerPassword, upsertCustomerOTP
} = require("./model/dbModel");
const e = require("express");

router.get('/sendEmail', async (req, res) => {
    const to = req.query.to;
    const subject = req.query.subject;
    const text = req.query.text;
    try {
        await sendEmail(to, subject, text)
        res.send("\nTo: " + to + "\nSubject: " +subject+ "\nText: " + text);
    } catch (error) {
        console.log(error)
    }
});


//how to use http://localhost:3000/test/weather?city=London
router.get('/weather', async (req, res) => {
    let city = req.query.city;
    try {
        let temp_c = await getTmpCWeatherAPI(city);
        res.send("" + temp_c);
    } catch (error) {
        console.log(error)
    }
});

//how to use http://localhost:3000/test/otp
router.get('/otp', async (req, res) => {
    try {
        let otpCode = await makeOTP()
        res.send("" + otpCode);
    } catch (error) {
        console.log(error)
    }
});

//how to use http://localhost:3000/test/getCustomerByEmail?email=davidhodefi0@gmail.com
router.get('/getCustomerByEmail', async (req, res) => {
    let email = req.query.email;
    try {
        let customer = await getCustomerByEmail(email);
        res.send("" + JSON.stringify(customer));
    } catch (error) {
        console.log(error)
    }
});

//how to use http://localhost:3000/test/getOtpByEmail?email=davidhodefi0@gmail.com
router.get('/getOtpByEmail', async (req, res) => {
    let email = req.query.email;
    try {
        let otp = await getOtpByEmail(email);
        res.send("" + JSON.stringify(otp));
    } catch (error) {
        console.log(error)
    }
});

//how to use http://localhost:3000/test/getCityById?id=1
router.get('/getCityById', async (req, res) => {
    let city_id = req.query.id;
    try {
        let city = await getCityById(city_id);
        res.send("" + JSON.stringify(city));
    } catch (error) {
        console.log(error)
    }
});
//how to use http://localhost:3000/test/createNewCustomer?email=some_email@gmail.com&password=123456&firstName=dave&lastName=hod
router.get('/createNewCustomer', async (req, res) => {
    let email = req.query.email;
    let password = req.query.password;
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    try {
        let customer = await createNewCustomer(email, password, firstName, lastName);
        res.send("" + JSON.stringify(customer));
    } catch (error) {
        console.log(error)
    }
});

//how to use http://localhost:3000/test/updateCustomerPassword?email=davidhodefi0@gmail.com&newPassword=123456
router.get('/updateCustomerPassword', async (req, res) => {
    let email = req.query.email;
    let newPassword = req.query.newPassword;
    try {
        let customer = await updateCustomerPassword(email, newPassword);
        res.send("" + JSON.stringify(JSON.stringify(customer)));
    } catch (error) {
        console.log(error)
    }
});

//how to use http://localhost:3000/test/upsertCustomerOTP?email=user@example.com&otp=123456&date=18/02/2024
router.get('/upsertCustomerOTP', async (req, res) => {
    let email = req.query.email;
    let otp = req.query.otp;
    try {
        let date = new Date(req.query.date)
        let customer_otp = await upsertCustomerOTP(email, otp, date);
        res.send("" + JSON.stringify(customer_otp));

    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
