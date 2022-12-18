const router = require("express").Router();

const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controller/task");

router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
