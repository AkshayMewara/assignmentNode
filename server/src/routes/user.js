const express = require('express');
require("../database/connection")
const router = express.Router();
const mongoose = require('mongoose');

const userController = require('../controller/user');


router.post("/signup", userController.signup)

router.post("/signin", userController.signin)



module.exports = router;