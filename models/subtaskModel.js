const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    subtask: {
        type: String,
        required: true
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task'
    }
   
})

const subTaskModel  = mongoose.model('subtask', subTaskSchema)

module.exports = subTaskModel


