const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./db');
require('dotenv').config();
connectDB();
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
 
  module.exports = app;