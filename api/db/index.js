const Sequelize = require("sequelize");

const db = new Sequelize("cruce", null, null, {
  host: "localhost",
  dialect: "postgres",
 
});

module.exports = db;