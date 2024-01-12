const taskModel = require('../models/userModel')
const subtaskModel = require('../models/subtaskModel')



exports.createSubtask = async (req, res) =>{
    try{
        const taskId = req.params.taskId

        const {subtask} = req.body
        const task = await taskModel.findById(taskId)

        if(!task){
            return res.status(400).json({
                message:`No task with this ID found`
            })
        }

        const createSubtask = await subtaskModel.create({
            subtask
        })

        task.subtask.push(subtask._id)
        createSubtask.task = task._id

        await task.save()
        await createSubtask.save()

        res.status(201).json({
            message: `Successfully added a subtask`,
            data: task
        })

    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}



exports.getSubtask = async (req, res) =>{
    try{
        const subtaskId = req.params.subtaskId

        const subtask = await subtaskModel.findById(subtaskId)

        if(!subtask){
            return res.status(404).json({
                message: `subtask has been deleted`
            })
        }
        res.status(200).json({
            message: `subtask fetched successfully`,
            data: subtask
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}    


exports.getAllSubtasks = async (req, res) =>{
    try{
        const subtask = await subtaskModel.find()

        if(subtask.length === 0){
            return res.status(200).json({
                message: `There are no subtasks present here`
            })
        }
        res.status(200).json({
            message: `subtasks fetched successfully. There are ${subtask.length} tasks here`,
            data: comment
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


exports.updateSubtask = async (req, res) =>{
    try{
        const subtaskId = req.params.subtaskId

        const {subtask} = req.body

        const update = await subtaskModel.findByIdAndUpdate(subtaskId, {
            subtask
        }, {new: true})

        if(!update){
            return res.status(404).json({
                message: `No subtask not found`
            })
        }
        res.status(200).json({
            message: `Subtask updated successfully`,
            data: update
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


exports.deleteSubtask = async (req, res) =>{
    try{
        const subtaskId = req.params.subtaskId
        const subtask = await subtaskModel.findByIdAndDelete(subtaskId)

        if(!subtask){
            return res.status(404).json({
                message: `subtask ID not found to be deleted`
            })
        }
        res.status(200).json({
            message: `subtask deleted successfully`,
            data: subtask
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}