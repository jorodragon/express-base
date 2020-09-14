var { Task } = require('@models');

const TaskService = {};

TaskService.create = async (title, user_id) => {
  return await Task.create({
    title: title,
    UserId: user_id,
  });
};

TaskService.destroy = async (task_id) => {
  return await Task.destroy({
    where: { id: task_id },
  });
};

TaskService.isExists = async (task_id) => {
  return await Task.findOne({
    where: { id: task_id },
  });
};

TaskService.find = async (options = {}) => {
  return await Task.findAll(options);
};

module.exports = TaskService;
