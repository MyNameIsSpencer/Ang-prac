const express = require('express');
const router = express.Router();

const RegCtrl = require('./RegCtrl');

router.post('/register', RegCtrl.CreateUser);

module.exports = router;
