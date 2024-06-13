const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  catalog_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  comments: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  order_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
