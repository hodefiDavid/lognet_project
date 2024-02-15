const {Pool} = require('pg');
const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT} = require("../env");

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT,
});


async function getCityById(id) {
    const query = 'SELECT * FROM city WHERE id = $1';
    const values = [id];

    try {
        const {rows} = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
}

async function getCustomerByEmail(email) {

    const query = 'SELECT * FROM customer WHERE email = $1';
    const values = [email];

    try {
        const {rows} = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
}

async function getOtpByEmail(email) {
    const query = 'SELECT * FROM otp WHERE email = $1';
    const values = [email];

    try {
        const {rows} = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
}

async function getCustomerById(id) {
    const query = 'SELECT * FROM customer WHERE id = $1';
    const values = [id];

    try {
        const {rows} = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
}





module.exports = {
    getCustomerByEmail,
    getOtpByEmail,
    getCustomerById,
    getCityById
};
