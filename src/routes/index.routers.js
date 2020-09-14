var models = require('../models');
var express = require('express');
var router = express.Router();
var { debug } = require('@utils/constant');
const response = require('../common/response');
const { wrapHandlerWithJSONResponse } = response;

const UserController = require('@controllers/users.controller');

router.get('/', async function (req, res) {
  let users = await UserController.getAll();

  debug.db(users);
  res.render('index', {
    title: 'Sequelize: Express Example',
    users: users,
  });
});

module.exports = router;
