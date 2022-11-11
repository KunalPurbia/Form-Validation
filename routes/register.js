var express = require('express');
var router = express.Router();
var path = require("path")

var publicDir = path.join(__dirname, '..', 'public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(publicDir + '/html/register.html');
});

router.post('/', function(req, res){
  console.log(req.body);
  res.redirect('/login');
})

module.exports = router;
