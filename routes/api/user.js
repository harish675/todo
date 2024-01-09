
const express = require('express');
const router = express.Router();
const userController = require('../../controller/user_controller');
const passport = require('passport');

router.post('/create-user',userController.createUser);
router.post('/create-session',passport.authenticate(
     'local',
     {failureRedirect:'users/sign-in'},
),userController.createSession);

router.get('/login',userController.loginPage);
router.get('/sign-up',userController.signUpPage);

module.exports = router;