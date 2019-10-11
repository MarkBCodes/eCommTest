const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    ///ref/link to a user saved car inventory
    savedEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Merch"
    }]
});

module.exports = mongoose.model('user', UserSchema);