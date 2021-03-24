const jwt = require('jsonwebtoken');
const User = require('../models/user');

function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[ 0 ] === "Bearer") {
        return req.headers.authorization.split(" ")[ 1 ];
    } 

    return null;
}

exports.checkBearerAuth = (req, res, next) => {
    try {
        const token = getToken(req);
        if (!token) 
        return res.status(403).send({ message: "No token found in request header!" });
   
        return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) 
            return res.status(403).send({ message: "Failed to authenticate token!" });

            console.log(decoded)
           
            req.user = {
                id: decoded._id

            };

            User.findOne({ _id: decoded._id }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                        error: "Invalid User"
                    });
                }
                //console.log(user)

            });

            return next();
        });
    } catch (err) {
        return res.status(403).send({ message: `Error Authenticated! ${err.message}` });
    }
}

