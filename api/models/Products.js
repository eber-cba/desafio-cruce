const Sequelize = require("sequelize");
const db = require("../db");
class Products extends Sequelize.Model {}

Products.init(
  {
    name: {
      type: Sequelize.STRING,
     },
    price: {
      type: Sequelize.INTEGER,
      
    },
    image: {
      type: Sequelize.STRING,
      
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;