const express = require('express');

const router = express.Router();
const { signUp, login, logOut } = require('../controllers/userController');
const authorization = require('../middleware/authorization');
const validation = require('../validation/validation');
  



router.post('/signup', validation ,signUp)
router.post('/login', login)
router.post('/logout', authorization , logOut)


module.exports = router;   