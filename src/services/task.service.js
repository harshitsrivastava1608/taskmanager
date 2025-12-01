const TaskModel = require("../model/task.model");
class TaskService {
  async createTask(taskData, userId) {
    try {
      console.log(taskData, +userId);
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

  async getTasks(userId,query={}) {
    try {
      const {status='',priority='',dueDate=''}=query;
      console.log("Query Params:", status,priority,dueDate);
      let filter={userId}
      if(status)filter.status=status;
      if(priority)filter.priority=priority;
      if(dueDate)filter.dueDate=dueDate;
      console.log("Filter Object:", filter);
      return await TaskModel.find(filter);
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
      return await TaskModel.findByIdAndDelete({_id:id});
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  }
}
module.exports = new TaskService();
