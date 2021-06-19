const mongoose = require('mongoose');


const User = mongoose.model('User', {
    accessToken: {
        type: String,
        required: true
    },
    expires_in: {
        type: Number,
        required: true,
    },
    userId: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    }
})

module.exports = User;