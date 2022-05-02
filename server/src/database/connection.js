const mongoose = require('mongoose');
const logger = require('../utility/logger')

mongoose.connect("mongodb://localhost:27017/bookstore", {

  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  logger.info("connection successfull");
}).catch((e) => {
  logger.info("No connection");
})


