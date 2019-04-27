const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Load user model
const User = require('../../models/User');

//@route GET api/users/test
//@desc Tests profile route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

//@route POST api/users/register
//@desc Register
//@access Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    name: req.body.name
  }).then(user => {
    if (user) {
      errors.name = 'that username already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => {
              console.log(err);
              if (err.code === 11000) {
                errors.email = 'that email already exists';
                res.status(400).json(errors);
              }
            });
        });
      });
    }
  });
});

//@route POST api/users/login
//@desc login
//@access Public

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  //find user by email
  User.findOne({ email }).then(user => {
    //check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user matched -> create jwt payload
        const payload = {
          id: user.id,
          name: user.name
        };

        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          //user stays logged in for 1 hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

//@route POST api/users/current
//@desc return current user
//@access Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      image: req.user.image
    });
  }
);

module.exports = router;
