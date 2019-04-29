const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create calendar schema
const BookingSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  timeslot: {
    type: Number,
    required: true
  },
  player1: {
    type: String,
    required: true
  },
  player2: {
    type: String,
    required: true
  },
  booked: {
    type: Boolean,
    required: true
  }
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
