var express = require('express');
var router = express.Router();
var path = require("path")

var publicDir = path.join(__dirname, '..', 'public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(publicDir + '/html/login.html');
});

router.post('/', function(req, res){
  console.log(req.body);
  res.sendFile(publicDir + '/html/login.html');
})

module.exports = router;
