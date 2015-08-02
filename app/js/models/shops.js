 // Requires mongoose and defines a new Schema instance
var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

// creates new Schema called Shop
var ShopSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Shops', ShopSchema);
