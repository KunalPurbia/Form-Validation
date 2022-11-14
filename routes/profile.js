var express = require('express');
var router = express.Router();
var path = require("path")

var publicDir = path.join(__dirname, '..', 'public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello");
});

module.exports = router;
