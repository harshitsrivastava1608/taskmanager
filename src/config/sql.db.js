const { Sequelize } = require("sequelize");
const {
SQL_DB_NAME,
SQL_DB_USERNAME,
SQL_DB_PASSWORD,
SQL_DB_HOST,
SQL_DIALECT,
SQL_PORT
}=process.env
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
      console.log("Connected to SQL database successfully");

      // Sync all models with the database
      await sequelize.sync({ force: false });
      console.log("Database models synced successfully");
      // In your database connection file (likely sequelize config)
      console.log("Sequelize query caching:", sequelize.options.cache); // Should be undefined/false
    }
  } catch (err) {
    console.error("Error connecting to SQL database", err);
  }
}

module.exports = { sequelize, connectDB };
