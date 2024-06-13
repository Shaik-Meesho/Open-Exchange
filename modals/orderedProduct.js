const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderedSchema = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  catalog_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  sscat_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  scat_id: {
    type: Schema.Types.ObjectId,
  },
  category_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  sscat: {
    type: String, 
  },
  scat: {
    type: String,  
  },
  category: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
  },
  super_portfolio: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  order_status: {
    type: Number,
    required: true,
    enum: [99, 3, 7, 6], 
  },
});

const OrderedProduct = mongoose.model('OrderedProduct', OrderedSchema);

module.exports =OrderedProduct;
