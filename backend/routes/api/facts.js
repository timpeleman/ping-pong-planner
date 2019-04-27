const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Fact = require('../../models/Fact');

//@route GET api/facts/daily
//@desc Tests facts route
//@access Private
router.get('/daily', (req, res) => {
  //get todays day
  const date = new Date();
  const today = date.toString().slice(8, 10);
  //find matching fact in database
  Fact.findOne({ day: today }).then((err, fact) => {
    if (err) {
      res.send(err);
    } else {
      res.send(fact);
    }
  });
});

//@route POST api/facts/new
//@desc post new fact route
//@access Admin
router.post('/new', (req, res) => {
  Fact.findOne({
    day: req.body.day
  }).then(fact => {
    if (fact) {
      return res.status(400).json('you already have a fact for that day');
    } else {
      const newFact = new Fact({
        day: req.body.day,
        fact: req.body.fact
      });
      newFact
        .save()
        .then(fact => res.json(fact))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
