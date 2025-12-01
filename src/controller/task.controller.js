const TaskService = require("../services/task.service");
exports.createTask = async (req, res) => {
  try {
   console.log("User ID in Controller:", req,req.userId);
    const result = await TaskService.createTask(req.body,req.userId);
   
    res.status(201).send({message:"Task Created successfully",data:result});
  } catch (err) {
    res.status(500).send("Error creating task");
  }
};

exports.getTask = async (req, res) => {
  try {
    const result = await TaskService.getTasks(req.userId,req.query);
   // console.log("Task Found:", result);
    res.status(200).send({
      message: "Tasks fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send({message:"task not found"});
  }
};

exports.updateTask = async (req, res) => {
  try {
    const result = await TaskService.updateTask(req.params.taskId, req.body);
    console.log("Task Updated:", result);
    res.status(201).send({message:"Task Updated successfully",data: result});
  } catch (err) {
    res.status(500).send({message:"task not found"});
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await TaskService.deleteTask(req.params.taskId);
    console.log("Task Deleted:", result);
    res.status(201).send({message:"Task Deleted successfully"});
  } catch (err) {
    res.status(500).send({message:"task not found"});
  }
};
