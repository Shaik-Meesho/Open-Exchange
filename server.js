// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const promptSearch = require('./routes/promptSearch');
const Product = require('./modals/products');
const OrderedProduct = require('./modals/orderedProduct');
const Review = require('./modals/review');
const { productData } = require('./data/productData');
const { orderedProductData } = require('./data/orderedData');
const { orderReviews } = require('./data/orderReview');
const storeImgIntoGcs = require('./routes/storeImageIntoGcsRoute')

const promptFromImage = require('./routes/PromptFromImage');

// const productDetails = require('./routes/getProdcutDetailsByIdRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(productDetails);

app.use(promptSearch);

app.use(promptFromImage);
// app.use(imageRoutes);
app.use(storeImgIntoGcs);

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
