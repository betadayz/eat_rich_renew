const mongoose = require('mongoose')

const planSchema = new mongoose.Schema({
    
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        trim: true,
        required: true
    },
    investments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investment'
    }],
    interest_rates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interest'
    }],
},
{ timestamps: true }
);



module.exports = mongoose.model("Plan", planSchema);