const Task = require("../models/TaskModel");

const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate, userId } = req.body;
    const task = await Task.create({
      title,
      description,
      status,
      dueDate,
      userId,
    });
    if (!task) {
      return res.status(400).json({
        message: "Task not Created",
      });
    }
    return res.status(201).json({
      message: "Task Created Successfull",
      task,
    });
  } catch (err) {
    return res.status(500).json({ error: "Error creating task." });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    if (!tasks) {
      return res.json({
        message: "Task Not Found",
      });
    }
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ error: "Error fetching tasks." });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found." });
    }
    await task.update({ title, description, status, dueDate });
    return res.json({
      message: "Task Updted",
      task,
    });
  } catch (err) {
    res.status(500).json({ error: "Error updating task." });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found." });
    }
    await task.destroy();
    return res.json({ message: "Task deleted successfully." });
  } catch (err) {
    return res.status(500).json({ error: "Error deleting task." });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
