const express = require('express');
const router = express.Router();
const { checkBearerAuth } = require('../helpers/authorization')


const { create } = require("../controllers/investment")
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth")
const { userById } = require("../controllers/user")
// const { investmentById } = require("../controllers/investment")

router.post('/create', checkBearerAuth, create);
// router.get("/:investmentId", (req, res) => {
//     res.json({
//         user: req.investment.Id
//     })
// })

router.param('userId', userById);
// router.param('investmentId', investmentById);

module.exports = router;