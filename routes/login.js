var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();

const app = express();
app.use(express.json());
urlencoded = express.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

const loginCheck = [  check('email', 'Email is not valid').isEmail(), 
                      check('password', 'Password cannot be empty').notEmpty()]

router.post('/', urlencoded, loginCheck, function(req, res){
  let errorData = validationResult(req);
  let errorArray = errorData.errors;
  if (errorArray.length === 0) {
    res.redirect('/profile')
  } else {
    const errorInput = errorArray[0].param;
    const errorMessage = errorArray[0].msg;

    res.render('login', {errorInput:errorInput, message:errorMessage});
  }
})

module.exports = router;
