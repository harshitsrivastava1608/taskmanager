const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sql.db");

const AuthModel = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    userName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  {
    tableName: "User",
    timestamps: true,
  }
);

module.exports = AuthModel;
