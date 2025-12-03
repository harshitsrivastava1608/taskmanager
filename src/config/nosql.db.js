const mongoose = require("mongoose");
const logger = require("../utilities/logger");

async function connectDB() {
  try {
    let connection;
    if (!connection) {
      connection = await mongoose.connect(`${process.env.MONGO_URI}`, {});
      logger.info("Connected to NoSQL database successfully");
    } else {
      logger.info("Re using the DB Connection");
    }
  } catch (err) {
    logger.error("Error connecting to NoSQL database", err);
  }
}
module.exports = connectDB;
