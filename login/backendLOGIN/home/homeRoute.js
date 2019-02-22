const express = require('express');
const router = express.Router();

const HomeCtrl = require('./homeCtrl');
const Helper = require('../helper/helper');

router.post('/get-all-users', Helper.CheckAuthToken, HomeCtrl.GetAllUsers);

module.exports = router;
