const Investment = require("../models/investment");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const investment = new Investment(req.body)
    investment.user = req.user.id;
    investment.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ data });
    });
 };

 exports.investmentById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user
        next();
    })
}