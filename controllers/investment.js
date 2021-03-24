const Investment = require("../models/investment");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const investment = new Investment(req.body)
    investment.user = req.user.id;
    investment.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
 };