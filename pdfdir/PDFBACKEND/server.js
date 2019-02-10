const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const word = require('./routes/wordRoutes.js');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));  // <<< formdata from forms

// VVVV wordRoutes will be preceded by api/converter, word is defined as wordRoutes
app.use('/api/converter', word);  //  look something like this VVVV
// "http://localhost3001/api/converter/word-to-pdf"

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
