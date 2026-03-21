const app = require('../src/app');
const mongoose = require('mongoose');
const connectDB = require('../src/config/database');

// Connect to MongoDB if not connected
if (mongoose.connection.readyState === 0) {
  connectDB();
}

// Export the Express API
module.exports = app;
