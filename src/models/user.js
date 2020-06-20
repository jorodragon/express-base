'use strict';

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
var sequelize = require(__dirname + '/../config/env.js');

class User extends Model { }
User.init({
  username: Sequelize.STRING
}, { sequelize, modelName: 'User', freezeTableName: true, });

User.associate = (db) => {
  db.User.hasMany(db.Task);
};

module.exports = () => User;
