const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

//load booking model
const Booking = require('../../models/Booking');

//GET route to '/'
//Private, Public for now

router.get('/', (req, res) => {
  Booking.find({}).then((err, bookings) => {
    if (err) {
      res.send(err);
    } else {
      res.send(bookings);
    }
  });
});

router.post('/', (req, res) => {
  const newBooking = new Booking({
    day: req.body.day,
    timeslot: req.body.timeslot,
    player1: req.body.player1,
    player2: req.body.player2,
    booked: true
  });
  newBooking
    .save()
    .then(booking => res.json(booking))
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;