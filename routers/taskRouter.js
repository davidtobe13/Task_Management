const express = require('express');
const { createTask, getTask, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authorization = require('../middleware/authorization');

const router = express.Router();


router.post('/createtask/:statusId', authorization, createTask)
router.get('/gettask/:taskId',  authorization, getTask)
router.get('/getalltasks', authorization , getAllTasks)
router.put('/updatetask/:taskId', authorization , updateTask)
router.delete('/deletetask/:taskId', authorization , deleteTask)


module.exports = router;