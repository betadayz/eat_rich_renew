const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
    rate: {
        type: Number,
        trim: true,
        required: true
    },
    startUnit: {
        type: Number,   
        required: true,
    },
    endUnit: {
        type: Number,
        required: true
    },
    investments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investment'
    }],
    plan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    }]
},
{ timestamps: true }
);

module.exports = mongoose.model("Interest", interestSchema);