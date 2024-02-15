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

async function updateCustomerPassword(email, newPassword) {
    const query = 'UPDATE customer SET password = $1 WHERE email = $2';
    const values = [newPassword, email];

    try {
        await pool.query(query, values);
        console.log('Password updated successfully');
    } catch (error) {
        console.error('Error updating password:', error);
        throw error;
    }
}

async function upsertCustomerPassword(email, newPassword) {
    const query = `
        INSERT INTO customer (email, password)
        VALUES ($1, $2)
        ON CONFLICT (email) DO UPDATE SET password = $2
    `;
    const values = [email, newPassword];

    try {
        await pool.query(query, values);
        console.log('Password updated successfully');
    } catch (error) {
        console.error('Error updating password:', error);
        throw error;
    }
}

async function upsertCustomerOTP(email, otp, date) {
    console.log('Upserting OTP for email:', email, 'OTP:', otp, 'Date:', date);
    const checkQuery = 'SELECT COUNT(*) FROM otp WHERE email = $1';
    const updateQuery = 'UPDATE otp SET otpcode = $2, date = $3 WHERE email = $1';
    const insertQuery = 'INSERT INTO otp (email, otpcode, date) VALUES ($1, $2, $3)';

    try {
        const { rows } = await pool.query(checkQuery, [email]);
        const rowCount = parseInt(rows[0].count);

        if (rowCount > 0) {
            await pool.query(updateQuery,[email, otp, date]);
            console.log('OTP updated successfully');
        } else {
            await pool.query(insertQuery,[email, otp, date]);
            console.log('OTP inserted successfully');
        }
    } catch (error) {
        console.error('Error upserting OTP:', error);
        throw error;
    }
}

module.exports = {
    getCustomerByEmail,
    getOtpByEmail,
    getCityById,
    upsertCustomerPassword,
    updateCustomerPassword,
    upsertCustomerOTP,
    getCustomerById
};
