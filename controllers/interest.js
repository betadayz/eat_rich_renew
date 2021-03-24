const Interest = require("../models/interest");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const interest = new Interest(req.body)
    interest.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.status(201).json({ data });
    });
 };