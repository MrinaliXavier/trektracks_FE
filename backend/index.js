// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const placeRoutes = require('./routes/placeRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/places', placeRoutes);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
