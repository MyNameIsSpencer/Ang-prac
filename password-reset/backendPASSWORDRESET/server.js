const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const auth = require('./routes/authRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/loginApp', {
  useNewUrlParser: true
});

app.use('/api/auth', auth);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
