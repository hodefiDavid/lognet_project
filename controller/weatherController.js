
const fetchDataFromWeatherAPI = require('../model/weatherModel');

async function weatherInfo(req, res) {

    try {
        await fetchDataFromWeatherAPI("London");
        res.status(200).json({ message: 'data receive successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to receive data' });
    }
}

module.exports = weatherInfo;
