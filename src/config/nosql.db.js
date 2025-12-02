const mongoose = require("mongoose");

async function connectDB() {
  try {
    let connection;
    if (!connection) {
      connection = await mongoose.connect(`${process.env.MONGO_URI}`, {});
      console.log("Connected to NoSQL database successfully");
    } else {
      console.log("Re using the DB Connection");
    }
  } catch (err) {
    console.error("Error connecting to NoSQL database", err);
  }
}
module.exports = connectDB;
