const taskModel = require('../models/taskModel')
const statusModel = require('../models/statusModel')
const userModel = require('../models/userModel')



exports.createTask = async (req, res) =>{
    try{
        const userId = req.user.userId
        const statusId = req.params.statusId

        const {title, content} = req.body

        const user = await userModel.findById(userId)

        const status = await statusModel.findById(statusId)
         

        if(!user){
            return res.status(400).json({
                message:`User not found`
            })
        }
        if(!status){
            return res.status(400).json({
                message:`No status with this ID found`
            })
        }

        const task = await taskModel.create({
            title,
            content
        })

        status.task.push(task._id)
        user.task.push(task._id)
        task.status = status._id
        task.user = user._id

        await status.save()
        await task.save()
        await user.save()

        res.status(201).json({
            message: `Successfully added a task`,
            data: task
        })

    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}



exports.getTask = async (req, res) =>{
    try{
        const taskId = req.params.taskId

        const task = await taskModel.findById(taskId).populate('subtask')

        if(!task){
            return res.status(404).json({
                message: `task has been deleted`
            })
        }
        res.status(200).json({
            message: `task fetched successfully`,
            data: task
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}    


exports.getAllTasks = async (req, res) =>{
    try{
        const task = await taskModel.find().populate('subtask')

        if(task.length === 0){
            return res.status(404).json({
                message: `There are no tasks present here`
            })
        }
        res.status(200).json({
            message: `tasks fetched successfully. There are ${task.length} tasks here`,
            data: task
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


exports.updateTask = async (req, res) =>{
    try{
        const userId = req.user.userId

        const {title, content} = req.body

        const update = await taskModel.findByIdAndUpdate(userId, {
            title, content
        }, {new: true})

        if(!update){
            return res.status(404).json({
                message: `No task not found`
            })
        }
        res.status(200).json({
            message: `Task updated successfully`,
            data: update
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


exports.deleteTask = async (req, res) =>{
    try{
        const userId = req.user.userId
        const task = await taskModel.findByIdAndDelete(userId)

        if(!task){
            return res.status(404).json({
                message: `task ID not found to be deleted`
            })
        }
        res.status(200).json({
            message: `task deleted successfully`,
            data: task
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}