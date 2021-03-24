const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
},
{ timestamps: true }
);



module.exports = mongoose.model("Plan", planSchema);