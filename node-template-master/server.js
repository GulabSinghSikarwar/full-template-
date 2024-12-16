const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'financeApp';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';


mongoose
  .connect((MONGO_URI + DB_NAME), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
