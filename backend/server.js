const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);

//connect to server
app.listen(port, () => console.log(`Server running on port ${port}`));
