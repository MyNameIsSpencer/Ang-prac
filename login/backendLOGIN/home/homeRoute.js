const express = require('express');
const router = express.Router();

const HomeCtrl = require('./homeCtrl');

router.post('/get-all-users', HomeCtrl.GetAllUsers);

module.exports = router;
