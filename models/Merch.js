const mongoose = require('mongoose');

const MerchSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true  
  },
  price: {
    type: Number,
    require: true
  },
  size: {
    type: String,
    require: true
  },
  productDetails: {
    type: String,
    require: true
  },
  inCart: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    require: true
  }


});

module.exports = mongoose.model('merch', MerchSchema);