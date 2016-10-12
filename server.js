var express = require('express');
var index = require('./routes/index');
var app = express();

app.use(express.static('public'));

app.use('/', index);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("llisten on port", port);
});
