// server.js

//Base SETUP
// =============================================================================

// require the node packages

var express    = require('express');      // call express
var app        = express();               // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Shop       = require('./app/models/shops');  // Gets the module and Schema from shops.js

// configure app to use bodyParser()
// this will get the data from a POST req

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;      // sets our PORT

// connects to the MongoLab MongoDB sandbox database:
mongoose.connect(' mongodb://michael_admin:' + dbpass + '@ds063240.mongolab.com:63240/simple_node_test');

// Routes for our API
// ==============================================================================

var router = express.Router();            // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to your first API!'});
});

// future routes for the API will be here

// REGISTER ROUTES --------------------------
// all routes will be prefixed with /api

app.use('/api', router);

// START THE SERVER
// ================================================================================

app.listen(port);
console.log('server is listening on port ' + port);


