var http = require('http');

var server = http.createServer( function (req, res){
  res.writeHead(200);
  res.write('<p>Hello World</p>');
  res.end();
});

var port = 8053;
server.listen(port, function() {
  console.log('server is listening on port' + port);
});
