const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    task: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'task'
    }],
   
})

const statusModel  = mongoose.model('status', statusSchema)

module.exports = statusModel


