const express = require('express');
const { deleteSubtask, updateSubtask, getAllSubtasks, getSubtask, createSubtask } = require('../controllers/subtaskController');
const authorization = require('../middleware/authorization');

const router = express.Router();




router.post('/createsubtask/:taskId', authorization, createSubtask)
router.get('/getsubtask', authorization ,getSubtask)
router.get('/getallsubtasks', authorization ,getAllSubtasks)
router.put('/updatesubtask/:subtaskId',  authorization , updateSubtask)
router.delete('/deletesubtask/:subtaskId',  authorization, deleteSubtask)


module.exports = router;