const mongoose = require('mongoose')
const crypto = require("crypto")
const { v1: uuidv1 } = require('uuid');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 50
    },
    dateOfReg: {
        type: Date,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    address: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    state: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    bank: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    accNumber: {
        type: String,
        trim: true,
        required: true,
    },
    nextOfKindName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    nextOfKindEmail: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    nextOfKindPhone: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    nextOfKindRelationship: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    sponsor: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
    refCode: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        trim: true
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    },
    investments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investment'
    }],
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investment'
    }

},
{ timestamps: true}
);

userSchema.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password)
})
.get(function() {
    return this._password
})

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword: function(password) {
        if(!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                             .update(password)
                             .digest('hex')
        } catch (err) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema);