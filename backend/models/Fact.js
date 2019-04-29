const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const FactSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  fact: {
    type: String,
    required: true
  }
});

module.exports = Fact = mongoose.model('facts', FactSchema);
