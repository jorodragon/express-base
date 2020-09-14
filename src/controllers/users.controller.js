const UserService = require('../services/users.service.js');

const UserController = {};

var { Task } = require('@models');

UserController.create = async (req, res) => {
  return await UserService.create(req.body.username);
};

UserController.destroy = async (req, res) => {
  return await UserService.destroy(req.params.user_id);
};

UserController.getAll = async (req, res) => {
  return await UserService.find({ include: [Task] });
};

module.exports = UserController;
