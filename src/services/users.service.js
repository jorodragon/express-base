var { User } = require('@models');

const UserService = {};

UserService.create = async (username) => {
  return await User.create({
    username: username,
  });
};

UserService.destroy = async (user_id) => {
  return await User.destroy({
    where: { id: user_id },
  });
};

UserService.isExists = async (user_id) => {
  return await User.findOne({
    where: { id: user_id },
  });
};

UserService.find = async (options = {}) => {
  return await User.findAll(options);
};

module.exports = UserService;
