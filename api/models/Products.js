const Sequelize = require("sequelize");
const db = require("../db");
class Products extends Sequelize.Model {}

Products.init(
  {
    name: {
      type: Sequelize.STRING,
      required: true,
    },
    price: {
      type: Sequelize.INTEGER,
      required: true,
    },
    image: {
      type: Sequelize.STRING,
      required: true,
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;