const express = require('express');
const router = express.Router();

const LoginCtrl = require('./LoginCtrl');

router.post('/login', LoginCtrl.LoginUser);

module.exports = router;
