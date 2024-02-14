// model/userModel.js

const users = [
    { id: 1, email: 'user@example.com', password: 'password1' },
    { id: 2, email: 'anotheruser@example.com', password: 'password2' }
];

exports.findByEmail = (email, callback) => {
    // Simulate finding a user by email in the database
    const user = users.find(u => u.email === email);
    callback(null, user);
};