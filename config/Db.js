const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv").config();
// Replace the placeholders with your actual database credentials
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = { sequelize, DataTypes };
