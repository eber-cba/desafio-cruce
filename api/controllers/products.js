const productsControllers = {};
const Products = require("../models");

productsControllers.createProducts = (req, res) => {
  Products.create(req.body)
    .then((products) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

productsControllers.findProducts = (req, res) => {
  Products.findAll().then((products) => res.status(200).send(products));
};
productsControllers.findoOneProductId = (req, res) => {
  Products.findOne({ where: { id: req.params.id } })
    .then((product) => res.send(product))
    .catch((error) => console.log(error));
};

productsControllers.editProducts = (req, res) => {
  Products.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

productsControllers.deleteProducts = (req, res) => {
  Products.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = productsControllers;
