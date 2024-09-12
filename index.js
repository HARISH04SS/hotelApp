
const mongoose = require('mongoose');
const { mongodb_url } = require('./utils/config');

mongoose.connect(mongodb_url)
.then(()=> console.log("connected to DB"))
.catch(err=> console.error("couldn't connet to DB",err));