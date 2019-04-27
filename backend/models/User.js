const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = User = mongoose.model('users', UserSchema);
