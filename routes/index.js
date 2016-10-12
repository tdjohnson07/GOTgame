var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res){
  var createdPath=path.join(__dirname, "../public/views/index.html");
  res.sendFile(createdPath);
});

module.exports = router;
