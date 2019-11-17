let express = require('express');
let router = express.Router();
let userController  = require('../controller/user.controller');

router.post('/create',userController.create);
router.post('/login',userController.login);
module.exports = router;