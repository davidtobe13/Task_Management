// Schemas for Swagger documentation

/**
 * @typedef Status
 * @property {string} status.required - The status value.
 * @property {array} task - An array of task IDs associated with this status.
 */

/**
 * @typedef SubTask
 * @property {string} subtask.required - The subtask value.
 * @property {string} task.required - The ID of the task associated with this subtask.
 */

/**
 * @typedef Task
 * @property {string} title.required - The title of the task.
 * @property {string} content.required - The content or description of the task.
 * @property {string} user.required - The ID of the user associated with this task.
 * @property {string} status.required - The ID of the status associated with this task.
 * @property {array} subtask - An array of subtask IDs associated with this task.
 */

/**
 * @typedef User
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email.required - The email of the user (must be unique).
 * @property {string} phoneNumber - The phone number of the user.
 * @property {string} password - The hashed password of the user.
 * @property {string} confirmPassword - The hashed confirmation password of the user.
 * @property {array} task - An array of task IDs associated with this user.
 * @property {array} blacklist - An array of blacklisted JWT tokens for this user.
 */

// Exporting schemas for use in Swagger documentation
module.exports = {
    Status: {},
    SubTask: {},
    Task: {},
    User: {},
  };
  