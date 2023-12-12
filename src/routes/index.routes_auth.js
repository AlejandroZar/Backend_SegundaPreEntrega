const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
const mongose = require('mongoose');

const router = express.Router();

const loginController = require("../controllers/AuthController")

router.get("/", loginController.mostrar)

module.exports = router
