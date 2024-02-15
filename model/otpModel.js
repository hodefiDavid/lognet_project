const getCityById = require("./dbModel");
const getTmpCWeatherAPI = require("./weatherModel");
const assert = require("assert");


function getRandomUniqueNumbers(min, max, count) {
    if (count > max - min + 1) {
        throw new Error('Cannot generate more unique numbers than the range allows');
    }
    let numbers = new Set();
    while (numbers.size < count) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(num);
    }
    return Array.from(numbers);
}


function formatTempC(temp_c) {
    let formatNum = parseInt(Math.abs(temp_c)).toString();
    if (formatNum.length > 2) {
        formatNum = formatNum.slice(0, 2);
    } else if (formatNum.length === 1) {
        formatNum = '0' + formatNum;
    }
    return formatNum;
}


async function makeOTP() {
    try {
        let uniqueRandNumbers = getRandomUniqueNumbers(1, 21, 3);

        let city1 = await getCityById(uniqueRandNumbers[0]);
        let city2 = await getCityById(uniqueRandNumbers[1]);
        let city3 = await getCityById(uniqueRandNumbers[2]);

        let tm_city1 = await getTmpCWeatherAPI(city1.name);
        let tm_city2 = await getTmpCWeatherAPI(city2.name);
        let tm_city3 = await getTmpCWeatherAPI(city3.name);

        let result =  "" + formatTempC(tm_city1) + "" + formatTempC(tm_city2) + "" + formatTempC(tm_city3);

        assert(6 === result.length );

        return result;
    } catch (error) {
        console.error('Failed to fetch data from API weatherapi :', error);
        throw error;
    }
}

module.exports = makeOTP;
