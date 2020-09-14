var express = require('express');
var router = express.Router();
const response = require('../common/response');
const { wrapHandlerWithJSONResponse } = response;
const { validation } = require('../middlewares/index.js');
const UserController = require('@controllers/users.controller');
const TaskController = require('@controllers/tasks.controller');

router
  .post(
    '/create',
    validation.create,
    wrapHandlerWithJSONResponse(UserController.create),
  )
  .get('/:user_id/destroy', wrapHandlerWithJSONResponse(UserController.destroy))
  .post(
    '/:user_id/tasks/create',
    wrapHandlerWithJSONResponse(TaskController.create),
  )
  .get(
    '/:user_id/tasks/:task_id/destroy',
    wrapHandlerWithJSONResponse(TaskController.destroy),
  );

module.exports = router;
