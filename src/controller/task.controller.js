const sendEmail = require("../services/email.service");
const TaskService = require("../services/task.service");
const {
  successResponse,
  errorResponse,
} = require("../utilities/response.messages.");
exports.createTask = async (req, res) => {
  try {
    console.log("User ID in Controller:", req, req.userId);
    const result = await TaskService.createTask(req.body, req.userId);
    successResponse(res, 201, "Task Created successfully", result);
  } catch (err) {
    errorResponse(res, 500, "Error creating task", [err.message]);
  }
};

exports.getTask = async (req, res) => {
  try {
    const result = await TaskService.getTasks(req.userId, req.query);
    successResponse(res, 200, "Tasks fetched successfully", result);
  } catch (err) {
    errorResponse(res, 500, "Error fetching tasks", [err.message]);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const result = await TaskService.updateTask(req.params.taskId, req.body);
    console.log("Task Updated:", result);
    successResponse(res, 200, "Task Updated successfully", result);
  } catch (err) {
    errorResponse(res, 500, "Error updating task", [err.message]);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await TaskService.deleteTask(req.params.taskId);
    console.log("Task Deleted:", result);
    successResponse(res, 200, "Task Deleted successfully", result);
  } catch (err) {
    errorResponse(res, 500, "task not found", [err.message]);
  }
};
