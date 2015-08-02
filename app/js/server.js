// server.js

//Base SETUP
// =============================================================================

// require the node packages

var express    = require('express');      // call express
var app        = express();               // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Shops       = require('../js/models/shops.js');  // Gets the module and Schema from shops.js
var keys       = require('../js/keys.js');

// configure app to use bodyParser()
// this will get the data from a POST req

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;      // sets our PORT

// connects to the MongoLab MongoDB sandbox database:
mongoose.connect('mongodb://michael_admin:' + keys.db.password + '@ds063240.mongolab.com:63240/simple_node_test');

// Routes for API
// ==============================================================================

var router = express.Router();            // get an instance of the express Router

// middleware to use for all requests
router.use(function(req,res,next){
  // request logging
  console.log('Your request is being processed');
  next(); // continues to next route
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to your first API!'});
});

router.route('/shops')

  // create a shop (accessed at POST http://localhost:8080/api/shops)
  .post(function(req,res){

    var shop = new Shops(); // create a new instance of Shop model
    shop.name = req.body.name; // sets the shops name (from req)

    // save shopa and checko for errors
    shop.save(function(err) {
      if (err)
        re.send(err);

      res.json({ message: 'Shop created'});
    });
  })

    // get all the shops (accessed at GET http://localhost:8080/api/shops)
    .get(function(req, res){
      Shops.find(function(err, shop){
        if (err)
          res.send(err);

        res.json(shop);
      });

    });

  router.route('/shops/:shop_id')

    // get shop (accessed at GET http://localhost:8080/api/shops/:shop_id)

    .get(function(req, res) {
      Shops.findById(req.params.shop_id, function(err, shop){
        if (err)
          res.send(err);

        res.json(shop);
      });
    })

    // update the shop with this id (accessed at PUT http://localhost:8080/api/shops/:shop_id)

    .put(function (req,res) {

      // use Shops model to find the shop we want
      Shops.findById(req.params.shop_id, function (err, shop) {

        if (err)
          res.send(err);

        shop.name = req.body.name; // update the shop info

        // save the shop
        shop.save(function (err) {
          if (err)
            res.send(err);

            res.json({ message: 'Shop updated!'});
        });

      });

    })

    .delete(function (req, res) {
      Shops.remove({
        _id: req.params.shop_id },

      function (err, shop) {
        if (err)
          res.send(err);

        res.json({ message: 'Sucessfully deleted' });

      });

    });




// REGISTER ROUTES --------------------------
// all routes will be prefixed with /api

app.use('/api', router);

// START THE SERVER
// ================================================================================

app.listen(port);
console.log('server is listening on port ' + port);


