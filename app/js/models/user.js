// Gets an instance of mongoose and mongoose.Schema

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// create a mongoose model and pass it with module.exports
module.exports = mongoose.model('User', new Schema({
  first_name: String,
  last_name: String,
  user_name: String,
  password: String,
  admin: Boolean
}));
