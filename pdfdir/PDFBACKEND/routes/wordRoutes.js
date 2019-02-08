const express = require('express');
const router = express.Router();

const WordCtrl = require('../controller/wordCtrl');  // << Access word ctrl

// also need get route to enable us to send data from front to back end
router.post('/word-to-pdf', WordCtrl.WordToPdf);  // << post route

module.exports = router;  // << exporting rouer
