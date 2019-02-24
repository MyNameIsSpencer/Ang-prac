const express = require('express');
const router = express.Router();

const ForgotPwdCtrl = require('../controllers/forgot-password');
const ResetPwdCtrl = require('../controllers/reset-password');

router.post('/forgot-password', ForgotPwdCtrl.ForgotPassword);
router.post('reset-password/:token', ResetPwdCtrl.ResetPassword);

module.exports = router;
