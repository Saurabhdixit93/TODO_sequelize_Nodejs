const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/Db");

class Task extends Model {
  static associate(models) {
    Task.belongsTo(models.User, { foreignKey: "userId" });
  }
}

Task.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    dueDate: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Task",
  }
);

module.exports = Task;
