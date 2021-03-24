const mongoose = require('mongoose')


const investmentSchema = new mongoose.Schema({
    
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
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        trim: true,
        required: true
    },
    rolloverInvestment: {
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
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    }

},
{ timestamps: true}
);


module.exports = mongoose.model("Investment", investmentSchema);