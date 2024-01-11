
const express = require('express');
const router = express.Router();
const homeController = require('../../controller/home_controller');


router.get('/',homeController.homePage);
router.use('/user',require('./user'));
router.use('/task',require('./task'));


module.exports = router;

