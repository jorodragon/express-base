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
    validation.validateParams({
      username: 'required|string|exist:User,username'
    }),
    wrapHandlerWithJSONResponse(UserController.create),
  )
  .get('/:user_id/destroy',
    validation.validateParams({
      user_id: 'required|integer|exist:User,id,required'
    }), wrapHandlerWithJSONResponse(UserController.destroy))
  .post(
    '/:user_id/tasks/create',
    validation.validateParams({
      user_id: 'required|integer|exist:User,id,required',
      title: 'required|string',
    }),
    wrapHandlerWithJSONResponse(TaskController.create),
  )
  .get(
    '/:user_id/tasks/:task_id/destroy',
    validation.validateParams({
      task_id: 'required|integer|exist:Task,id,required'
    }),
    wrapHandlerWithJSONResponse(TaskController.destroy),
  );

module.exports = router;
