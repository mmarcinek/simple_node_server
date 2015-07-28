var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

var port = 8023;
server.listen(port, function () {
  console.log('server is litening on port' + port);
});
