var express = require('express');
const {
  check,
  validationResult
} = require('express-validator');
var router = express.Router();
var path = require("path");

const app = express();
app.use(express.json());
urlencoded = express.urlencoded({
  extended: false
});

var publicDir = path.join(__dirname, '..', 'public')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register');
});

const registerCheck = [check('username', 'Name field cannot be empty').notEmpty(),
  check('email', 'Email is not valid').isEmail(),
  check('dob', 'Date of birth cannot be empty').notEmpty(),
  check('password', 'Password cannot be empty').notEmpty(),
  check('password1', 'Passwords are not matching').notEmpty()
]

router.post('/', urlencoded, registerCheck, function (req, res) {
  let errorData = validationResult(req);
  let errorArray = errorData.errors;
  if (errorArray.length === 0) {
    const dob = req.body.dob;
    const year = dob.slice(0, 4);
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    res.redirect('/login');
  } else {
    const errorInput = errorArray[0].param;
    const errorMessage = errorArray[0].msg;
    // res.send(error)
    res.render('register', {errorInput:errorInput, message:errorMessage});
  }
})

module.exports = router;