const express = require('express');

const router = express.Router();
const { newStatus, getStatus, getAllStatus } = require('../controllers/statusController');


  

router.post('/createstatus',  newStatus)
router.get('/getonestatus', getStatus)
router.get('/getallstatus', getAllStatus)


module.exports = router;