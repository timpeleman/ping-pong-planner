const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello!'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);

//connect to server
app.listen(port, () => console.log(`Server running on port ${port}`));
