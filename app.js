// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require('cors');

// Load environment variables as early as possible
dotenv.config();
// Connect DB first
connectDB(); 

/*const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:3000',
    'http://localhost:5000' ]; // Frontend URL

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes (origin)) {
            callback(null, true);
        } else {
        callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));*/




// Middleware
const app = express();
app.use(express.json());

// Security Middlewares
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP
    message: "Too many requests, please try again later.",
  })
);


// A simple health check route to confirm the API is live
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "OK" });
});


app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running sucessfully'})
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

module.exports = app;