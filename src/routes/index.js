var models = require('../models');
var express = require('express');
var router = express.Router();
var { debug } = require('@utils/constant');

router.get('/', function (req, res) {
  models.User.findAll({
    include: [models.Task]
  }).then(function (users) {
    debug.db(users);
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
