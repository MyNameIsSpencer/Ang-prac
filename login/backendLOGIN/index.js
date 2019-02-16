const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const signup = require('./signup/regRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/loginApp', {
  useNewUrlParser: true
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
