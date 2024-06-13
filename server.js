// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sampleRoute = require('./routes/sample');
const promptSearch = require('./routes/promptSearch');
const Product = require('./modals/products');
const OrderedProduct = require('./modals/orderedProduct');
const Review = require('./modals/review');
const { productData } = require('./data/productData');
const { orderedProductData } = require('./data/orderedData');
const { orderReviews } = require('./data/orderReview');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.use(sampleRoute);
app.use(promptSearch);

// Function to insert data and start the server
const startServer = async () => {
  try {
    await mongoose.connect("mongodb+srv://Treasurer:treasure@cluster1.ilidknz.mongodb.net/OpenExchange?retryWrites=true&w=majority");
    console.log('Connected to MongoDB');

    // await Product.insertMany(productData);
    // console.log('Product data inserted successfully');

    // await OrderedProduct.insertMany(orderedProductData);
    // console.log('Ordered product data inserted successfully');

    // await Review.insertMany(orderReviews);
    // console.log('Review data inserted successfully');

    // Starting the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.error('Error:', err);
  }
};

startServer();
