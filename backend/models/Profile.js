const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema
const ProfileSchema = new Schema({
  //bring in the user schema and connect via the userId(objectId)
  user: {
    type: Schema.Types.ObjectId,
    re: 'users'
  },
  //make url more userfriendly (username ipv id)
  handle: {
    type: String,
    required: true,
    max: 40
  },
  group: {
    type: String,
    required: true
  },
  games: {
    type: Number
  },
  winnings: {
    type: Number
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
