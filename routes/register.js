var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();
var path = require("path");

const app = express();
app.use(express.json());
urlencoded = express.urlencoded({ extended: false });

var publicDir = path.join(__dirname, '..', 'public')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

const registerCheck = [ check('username', 'Name field cannot be empty').notEmpty(), 
                        check('email', 'Email is not valid').isEmail(), 
                        check('dob', 'Date of birth cannot be empty').notEmpty(),
                        check('password', 'Password cannot be empty').notEmpty(), 
                        check('password1', 'Passwords are not matching').notEmpty()]

router.post('/', urlencoded, registerCheck, function(req, res){
  const errors = validationResult(req);
  console.log(errors.mapped());
  console.log(req.body);
  const dob = req.body.dob;
  const year = dob.slice(0,4);
  const month = dob.slice(5,7);
  const date = dob.slice(8,10);
  console.log("Date of Birth - " +date+"/"+month+"/"+year);
  const currentYear = new Date().getFullYear();
  console.log("Current Year - " +currentYear);

  const age = currentYear - year;
  console.log("Age - " +age);
  res.redirect('/login');
})

module.exports = router;
