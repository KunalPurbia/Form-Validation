var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();
var path = require("path")

const app = express();
app.use(express.json());
urlencoded = express.urlencoded({ extended: false });

var publicDir = path.join(__dirname, '..', 'public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

const loginCheck = [  check('email', 'Email is not valid').isEmail(), 
                      check('password', 'Password cannot be empty').notEmpty()]

router.post('/', urlencoded, loginCheck, function(req, res){
  const errors = validationResult(req);
  console.log(errors);
  console.log(req.body);
  res.redirect('/profile')
})

module.exports = router;
