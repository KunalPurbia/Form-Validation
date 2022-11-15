var express = require('express');
var router = express.Router();
var path = require("path")
const mongoose = require('mongoose');
const User = mongoose.model("user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello");
});

router.post('/update', function(req, res){
  res.send("Update");
})

router.post('/delete', function(req, res){
  res.send("Delete");
})

module.exports = router;
