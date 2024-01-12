const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    subTask: {
        type: String,
        required: true
    },
    task: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'task'
    }
   
})

const subTaskModel  = mongoose.model('subtask', subTaskSchema)

module.exports = subTaskModel


