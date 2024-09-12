const express = require('express');
const residentRouter = require('./routes/residentRoute');
const app = express();
app.use('/api/v1',residentRouter)
module.exports = app;