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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }, 
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'status'
    },
    subtask: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subtask'
    }],
   
}) 

const taskModel  = mongoose.model('task', taskSchema)

module.exports = taskModel


