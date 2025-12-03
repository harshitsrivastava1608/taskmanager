const TaskModel = require("../model/task.model");
const sendEmail = require("../services/email.service");
const  getTasksNearToExpire  = require("../utilities/date.format");
const logger = require("../utilities/logger");
class TaskService {
  async createTask(taskData, userId) {
    try {
      logger.info(taskData, +userId);
      let { title, description, dueDate, priority, status } = taskData;
      userId = +userId;
      const newTask = new TaskModel({
        userId,
        title,
        description,
        dueDate,
        priority,
        status,
      });

      return await newTask.save();
    } catch (err) {
      console.error("Error creating task:", err);
    }
  }

  async getTaskById(id) {
    try {
      return await TaskModel.findOne({ _id: id });
    } catch (err) {
      console.error("Error fetching task by ID:", err);
    }
  }

  async getTasks(userId, query = {}) {
    try {
      const {
        status = "",
        priority = "",
        dueDate = "",
        pageSize = "",
        pageNumber = "",
      } = query;

      let filter = { userId };

      if (status) filter.status = status;
      if (priority) filter.priority = priority;
      if (dueDate) filter.dueDate = dueDate;
      let result;
      if (pageSize && pageNumber) {
        result = await TaskModel.find(filter)
          .skip((pageNumber - 1) * pageSize)
          .limit(pageSize);
      } else result = await TaskModel.find(filter);

      if (result.length === 0) {
        throw new Error("No tasks found");
      }

      let tasksNearToExpire = [...getTasksNearToExpire(result)];
    
      if (tasksNearToExpire.length > 0) {
        tasksNearToExpire = tasksNearToExpire.map(function (tasks) {
          return tasks.title;
        });

        await sendEmail(userId, tasksNearToExpire);
      }
      return result;
    } catch (err) {
      console.error("Error fetching task by ID:", err);
    }
  }

  async updateTask(id, updateData) {
    try {
      return await TaskModel.findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
        upsert: true,
      });
    } catch (err) {
      console.error("Error updating task:", err);
    }
  }
  async deleteTask(id) {
    try {
      return await TaskModel.findByIdAndDelete({ _id: id });
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  }
}

module.exports = new TaskService();
