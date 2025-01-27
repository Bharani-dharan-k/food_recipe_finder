const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
require('dotenv').config();

const userRoutes = require('./Routes/userRouter');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// API Routes
app.use('/api/users', userRoutes);  // Mount user routes

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
