const Sequelize = require("sequelize");
const { debug } = require("@utils/constant")

const env = {
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "tronghieu",
  database: process.env.DB_NAME || "express_base"
}

const sequelize = new Sequelize(env.database, env.user, env.password, {
  host: env.host,
  dialect: "mysql",
  // logging: debug.db,
  logging: false,
  query: { raw: false },
  timezone: "+07:00",
  dialectOptions: {
    multipleStatements: true
  },
  pool: {
    max: 30,
    min: 0,
    acquire: 60000,
    idle: 5000
  },
  define: {
    hooks: true
  }
});

module.exports = sequelize;
