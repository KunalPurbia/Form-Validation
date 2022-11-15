var express = require('express');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
var router = express.Router();
var cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
urlencoded = express.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

const User = mongoose.model("user");

const loginCheck = [  check('email', 'Email is not valid').isEmail(), 
                      check('password', 'Password cannot be empty').notEmpty()]

router.post('/', urlencoded, loginCheck, function(req, res){
  let errorData = validationResult(req);
  let errorArray = errorData.errors;
  if (errorArray.length === 0) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email, password:password}, function(err, foundUser){
      if(err){throw err}
      else{
        if(foundUser){
          res.cookie("user_email", foundUser.email)
          res.render('profile', {user: foundUser})
        } else{
          res.send("Account not found");
        }
      }
    })
  } else {
    const errorInput = errorArray[0].param;
    const errorMessage = errorArray[0].msg;

    res.render('login', {errorInput:errorInput, message:errorMessage});
  }
})

module.exports = router;
