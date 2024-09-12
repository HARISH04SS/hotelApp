const express = require('express');
const residentController = require('../controllers/residantController');
const residentRouter = express.Router();

residentRouter.get('/',residentController.test)
module.exports = residentRouter;