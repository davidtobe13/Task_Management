// subtaskRouter.js

/**
 * @swagger
 * tags:
 *   name: Subtasks
 *   description: API endpoints for managing subtasks
 */

const express = require('express');
const { createSubtask, getSubtask, getAllSubtasks, updateSubtask, deleteSubtask } = require('../controllers/subtaskController');
const authorization = require('../middleware/authorization');

const router = express.Router();

/**
 * @swagger
 * /api/v1/createsubtask/{taskId}:
 *   post:
 *     summary: Create a new subtask
 *     tags: [Subtasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The ID of the task associated with the subtask
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/SubTask'
 *     responses:
 *       201:
 *         description: Subtask created successfully
 *       400:
 *         description: Bad request or invalid task ID
 *       500:
 *         description: Internal server error
 */
router.post('/createsubtask/:taskId', authorization, createSubtask);

/**
 * @swagger
 * /api/v1/getsubtask/{subtaskId}:
 *   get:
 *     summary: Get a specific subtask by ID
 *     tags: [Subtasks]
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The ID of the subtask
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subtask fetched successfully
 *       404:
 *         description: Subtask not found
 *       500:
 *         description: Internal server error
 */
router.get('/getsubtask/:subtaskId', authorization, getSubtask);

/**
 * @swagger
 * /api/v1/getallsubtasks:
 *   get:
 *     summary: Get all subtasks
 *     tags: [Subtasks]
 *     responses:
 *       200:
 *         description: Subtasks fetched successfully
 *       404:
 *         description: No subtasks found
 *       500:
 *         description: Internal server error
 */
router.get('/getallsubtasks', authorization, getAllSubtasks);

/**
 * @swagger
 * /api/v1/updatesubtask/{subtaskId}:
 *   put:
 *     summary: Update a subtask by ID
 *     tags: [Subtasks]
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The ID of the subtask
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/SubTask'
 *     responses:
 *       200:
 *         description: Subtask updated successfully
 *       404:
 *         description: Subtask not found
 *       500:
 *         description: Internal server error
 */
router.put('/updatesubtask/:subtaskId', authorization, updateSubtask);

/**
 * @swagger
 * /api/v1/deletesubtask/{subtaskId}:
 *   delete:
 *     summary: Delete a subtask by ID
 *     tags: [Subtasks]
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The ID of the subtask
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subtask deleted successfully
 *       404:
 *         description: Subtask not found
 *       500:
 *         description: Internal server error
 */
router.delete('/deletesubtask/:subtaskId', authorization, deleteSubtask);

module.exports = router;
