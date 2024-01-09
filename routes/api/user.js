
const express = require('express');
const router = express.Router();
const userController = require('../../controller/user_controller');

router.post('/create-user',userController.createUser);


module.exports = router;