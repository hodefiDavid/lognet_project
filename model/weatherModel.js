
const axios = require('axios');
const {WEATHER_API_KEY} = require("../env");

async function getTmpCWeatherAPI(city) {
    try {
        let _api = "https://api.weatherapi.com/v1/current.json?";
        let _url = _api +"key="+ WEATHER_API_KEY +"&q="+ city + "&aqi=no";
        const response = await axios.get(_url);

        // console.log(response.data.current.temp_c);
        return response.data.current.temp_c;

    } catch (error) {
        console.error('Failed to fetch data from API weatherapi :', error);
        throw error;
    }
}


module.exports = getTmpCWeatherAPI;

