const express = require('express');
const { registerUser, loginUser } = require('../Controller/userController'); // Import controller functions

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login an existing user
router.post('/login', loginUser);

module.exports = router;
