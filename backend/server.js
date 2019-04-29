const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const facts = require('./routes/api/facts');

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .createConnection(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/facts', facts);
//connect to server
app.listen(port, () => console.log(`Server running on port ${port}`));
