const express = require('express');
const router = express.Router();
const { checkBearerAuth } = require('../helpers/authorization')


const { create, investmentById, read } = require("../controllers/investment")
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth")
const { userById } = require("../controllers/user")

router.post('/create', checkBearerAuth, create);
router.get("/investment/:investmentId", read);


router.param('userId', userById);
router.param('investmentId', investmentById);

module.exports = router;