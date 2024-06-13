// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const smapleRoute = require('./routes/sample');
const promptSearch = require('./routes/promptSearch');
const imageRoutes = require('./routes/imageSearch');
const storeImgIntoGcs = require('./routes/storeImageIntoGcsRoute');
require('dotenv').config();

// const productController = require('./controllers/productController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(smapleRoute);

app.use(promptSearch);

app.use(imageRoutes);

app.use(storeImgIntoGcs);
// Routes
// app.use('/api/products', productController);

// Database Connection
mongoose.connect("mongodb+srv://Javid_Shaik:Javkid322@cluster0.cfidmvh.mongodb.net/OpenExchnage", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
