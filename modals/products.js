const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  supplier_state: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  ss_cat_name: {
    type: String,
    required: true,
  },
  total_delivered_orders: {
    type: Number,
    required: true,
  },
  supplier_city: {
    type: String,
    required: true,
  },
  total_orders: {
    type: Number,
    required: true,
  },
  catalog_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  s_cat: {
    type: String,
    required: true,
  },
  total_views: {
    type: Number,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  ss_cat_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  total_exchange_orders: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  fabric: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_link_512: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
