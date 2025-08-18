// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Load environment variables as early as possible
dotenv.config();
// Connect DB first
connectDB(); 



// Middleware
const app = express();
app.use(express.json());

// Security Middlewares
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP
    message: "Too many requests, please try again later.",
  })
);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running sucessfully'})
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

module.exports = app;