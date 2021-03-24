const mongoose = require('mongoose')


const investmentSchema = new mongoose.Schema({
    
    amount: {
        type: Number,
        required: true
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
        type: Number,
        trim: true,
        required: true
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    interest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interest',
        required: true
    }

},
{ timestamps: true}
);


module.exports = mongoose.model("Investment", investmentSchema);