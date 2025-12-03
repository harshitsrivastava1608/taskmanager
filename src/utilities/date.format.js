const logger = require("./logger");
const getTasksNearToExpire = (tasks = []) => {
  tasks = tasks.filter((task) => {
    let dueDate = new Date(task.dueDate);
    let currentDate = new Date();
    return sameDay(dueDate, currentDate);
  });
  logger.info("Filtered tasks near to expire: ", tasks);
  return tasks;
};
const sameDay = (d1, d2) => {
  return d1.toISOString().split("T")[0] === d2.toISOString().split("T")[0];
};
module.exports = getTasksNearToExpire;
