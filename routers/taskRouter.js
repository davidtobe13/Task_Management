// taskRouter.js

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API endpoints for managing tasks
 */

const express = require('express');
const { createTask, getTask, getAllTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authorization = require('../middleware/authorization');

const router = express.Router();

/**
 * @swagger
 * /api/v1/createtask/{statusId}:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: statusId
 *         required: true
 *         description: The ID of the status associated with the task
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Task'
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Bad request or invalid status ID
 *       500:
 *         description: Internal server error
 */
router.post('/createtask/:statusId', authorization, createTask);

/**
 * @swagger
 * /api/v1/gettask/{taskId}:
 *   get:
 *     summary: Get a specific task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The ID of the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task fetched successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.get('/gettask/:taskId', authorization, getTask);

/**
 * @swagger
 * /api/v1/getalltasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Tasks fetched successfully
 *       404:
 *         description: No tasks found
 *       500:
 *         description: Internal server error
 */
router.get('/getalltasks', authorization, getAllTasks);

/**
 * @swagger
 * /api/v1/updatetask/{taskId}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The ID of the task
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Task'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.put('/updatetask/:taskId', authorization, updateTask);

/**
 * @swagger
 * /api/v1/deletetask/{taskId}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The ID of the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.delete('/deletetask/:taskId', authorization, deleteTask);

module.exports = router;
