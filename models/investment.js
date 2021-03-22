const mongoose = require('mongoose')


const investmentSchema = new mongoose.Schema({
    planId: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    userId: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    amount: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    startDate: {
        type: Date,
        required: true
    },
    EndDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        trim: true,
        required: true
    },
    rollOverInvestment: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    unit: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},
{ timestamps: true}
);


module.exports = mongoose.model("Investment", investmentSchema);