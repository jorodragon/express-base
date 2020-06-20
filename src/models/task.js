'use strict';

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
var sequelize = require(__dirname + '/../config/env.js');
var db = require('./index.js');

class Task extends Model { }

Task.init({
  title: Sequelize.STRING
}, { sequelize, modelName: 'Task', freezeTableName: true, });

Task.associate = (db) => {
  db.Task.belongsTo(db.User, {
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false
    }
  });
}

module.exports = () => Task;
