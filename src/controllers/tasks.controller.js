var models = require('../models');
const TaskService = require('../services/tasks.service.js');

const TaskController = {};

TaskController.create = async (req, res) => {
  return await TaskService.create(req.body.title, req.params.user_id);
};

TaskController.destroy = async (req, res) => {
  return await TaskService.destroy(req.params.task_id);
};

module.exports = TaskController;
