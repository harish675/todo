const express = require('express');
const router = express.Router();
const taskController = require('../../controller/task_controller');


router.post('/create-task',taskController.createTask);





module.exports = router;