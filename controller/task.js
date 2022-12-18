//req the model
const Tasks = require("../model/task");
//async/await - resolve promises
// GET ALL TASKS
const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json({ data: tasks });
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};

// GET A SINGLE TASK
const getTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Tasks.findOne({ _id: taskId });
    res.status(200).json({ data: task });
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};
// CREATE A NEW TASK
const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({ message: "New task added", data: task });
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};
// DELETE A TASK
const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: taskId });
    res.status(200).json({ message: "task has been deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};
// UPDATE A TASK

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ message: "task updated", data: task });
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};

module.exports = { getTasks, createTask, getTask, deleteTask, updateTask };
