const express = require('express');
const { AuthController } = require('../../controllers');

const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/register').post(AuthController.register);
router.route('/logout').post(AuthController.logout);

module.exports = router;
