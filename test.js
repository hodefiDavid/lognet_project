// test.js
const express = require('express');
const router = express.Router();
const sendEmail = require('./model/mailModel');
const makeOTP = require("./model/otpModel");
const getTmpCWeatherAPI = require("./model/weatherModel");

router.get('/sendEmail', async (req, res) => {
    const to = req.query.to;
    const subject = req.query.subject;
    const text = req.query.text;
    await sendEmail(to, subject, text)
    res.send("To: "+to +"\nSubject: "+"\nText: "+text);
});

router.get('/date', (req, res) => {
    res.send('This is the date endpoint');
});

//how to use http://localhost:3000/test/weather?city=London
router.get('/weather', async (req, res) => {
    let city = req.query.city;
    let temp_c = await getTmpCWeatherAPI(city);
    res.send(""+temp_c);
});

//how to use http://localhost:3000/test/otp
router.get('/otp', async (req, res) => {
    let otpCode = await makeOTP()
    res.send(""+otpCode);
});

module.exports = router;
