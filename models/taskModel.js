const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    status: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'status'
    },
    subTask: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'subtask'
    }],
   
})

const taskModel  = mongoose.model('task', taskSchema)

module.exports = taskModel


