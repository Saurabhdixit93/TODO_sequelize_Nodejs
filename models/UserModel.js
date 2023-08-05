const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/Db");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Task, { foreignKey: "userId" });
  }
}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;