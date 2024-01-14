const express = require('express');

const router = express.Router();
const { signUp, login, logOut } = require('../controllers/userController');
const authorization = require('../middleware/authorization');
const validation = require('../validation/validation');

// userRouter.js

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to users
 */

  

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       '400':
 *         description: Invalid request or user already exists
 *         content:
 *           application/json:
 *             example:
 *               message: 'Invalid request or user already exists'
 */
router.post('/signup', validation, signUp);

router.post('/signup', validation ,signUp)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserLogin'
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         schema:
 *           $ref: '#/definitions/UserResponse'
 *       '404':
 *         description: User not found
 *       '400':
 *         description: Invalid password
 * 
 * */


router.post('/login', login)


/*

* /logout:
*   post:
*     summary: Log out user
*     tags: [Users]
*     security:
*       - BearerAuth: []
*     responses:
*       200:
*         description: User signed out successfully
*         content:
*           application/json:
*             example:
*               message: User signed out successfully
*               user:
*                 _id: "60a4c29e8e39ea001cbb73a7"
*                 firstName: "John"
*                 lastName: "Doe"
*                 email: "john.doe@example.com"
*                 phoneNumber: "+1234567890"
*                 password: "$2a$10$..."
*                 confirmPassword: "$2a$10$..."
*                 task: []
*                 blacklist: ["eyJhbGciOiJIUzI1NiIsIn..."]
*/
router.post('/logout', authorization , logOut)


module.exports = router;   
