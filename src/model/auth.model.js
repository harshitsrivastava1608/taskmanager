const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sql.db");

const AuthModel = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "User",
    timestamps: true,
  }
);

module.exports = AuthModel;
