const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
       type: String,
       required: true,
       min:6,
       max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 225,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);