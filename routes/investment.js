const express = require('express');
const router = express.Router();
const { checkBearerAuth } = require('../helpers/authorization')


const { create } = require("../controllers/investment")
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth")
const { userById } = require("../controllers/user")

router.post('/create', checkBearerAuth, create);

router.param('userId', userById);

module.exports = router;