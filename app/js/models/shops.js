 // Requires mongoose and defines a new Schema instance
var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

// creates new Schema called Shops
var ShopSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zipcode: String
});

module.exports = mongoose.model('Shops', ShopSchema);
