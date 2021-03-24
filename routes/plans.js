const express = require('express');
const router = express.Router();
const { checkBearerAuth } = require('../helpers/authorization')


const { create } = require("../controllers/plan")

router.post('/create', checkBearerAuth, create);

module.exports = router;