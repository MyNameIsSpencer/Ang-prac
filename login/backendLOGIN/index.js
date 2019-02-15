const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/loginApp', {
  useNewUrlParser: true
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});




//
// //Import the mongoose module
// var mongoose = require('mongoose');
//
// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB);
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;
//
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
