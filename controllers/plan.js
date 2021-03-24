const Plan = require("../models/plans");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const plan = new Plan(req.body)
    plan.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.status(201).json({ data });
    });
 };