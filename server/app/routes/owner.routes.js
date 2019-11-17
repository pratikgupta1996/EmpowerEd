let express = require('express');
let router = express.Router();
let ownerController  = require('../controller/owner.controller');

router.post('/create',ownerController.create);
module.exports = router;