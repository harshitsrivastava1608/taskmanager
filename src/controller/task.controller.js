const TaskService = require("../services/task.service");
exports.createTask = async (req, res) => {
  try {
    console.log("inisde controller", req.body);
    const result = await TaskService.createTask(req.body);
    console.log("Task Created:", result);
    res.status(201).send({message:"Task Created successfully",data:result});
  } catch (err) {
    res.status(500).send("Error creating task");
  }
};

exports.getTask = async (req, res) => {
  try {
    const result = await TaskService.getTasks();
    console.log("Task Found:", result);
    res.status(200).send({
      message: "Tasks fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send("task not found");
  }
};

exports.updateTask = async (req, res) => {
  try {
    const result = await TaskService.updateTask(req.params.id, req.body);
    console.log("Task Updated:", result);
    res.status(201).send("Task Updated successfully", result);
  } catch (err) {
    res.status(500).send("task not found");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await TaskService.deleteTask(req.params.id);
    console.log("Task Deleted:", result);
    res.status(201).send("Task Deleted successfully");
  } catch (err) {
    res.status(500).send("task not found");
  }
};
