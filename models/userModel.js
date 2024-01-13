const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
    task: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task'
    }],
    blacklist : {
        type: Array,
        default: [],
    }
})

const userModel  = mongoose.model('user', userSchema)

module.exports = userModel


