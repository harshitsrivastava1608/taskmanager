const { Sequelize } = require("sequelize");
const logger = require("../utilities/logger");

const {
  SQL_DB_NAME,
  SQL_DB_USERNAME,
  SQL_DB_PASSWORD,
  SQL_DB_HOST,
  SQL_DIALECT,
  SQL_PORT,
} = process.env;

const sequelize = new Sequelize(SQL_DB_NAME, SQL_DB_USERNAME, SQL_DB_PASSWORD, {
  host: SQL_DB_HOST,
  dialect: SQL_DIALECT,
  port: SQL_PORT,
});

let connection = null;

async function connectDB() {
  try {
    if (!connection) {
      connection = await sequelize.authenticate();
      logger.info("Connected to SQL database successfully");
      // Sync all models with the database
      await sequelize.sync({ force: false });
      logger.info("Database models synced successfully");
    } else {
      logger.info("Re using the DB Connection");
    }
  } catch (err) {
    logger.error("Error connecting to SQL database", err);
  }
}

module.exports = { sequelize, connectDB };
