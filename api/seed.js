const Products = require("./models");

const postProducts = [
  {
    image: "http://via.placeholder.com/150x150",
    name: "Producto 1",
    price: 100.0,
  },
  {
    image: "http://via.placeholder.com/150x150",
    name: "Producto 2",
    price: 200.0,
  },
  {
    image: "http://via.placeholder.com/150x150",
    name: "Producto 3",
    price: 300.0,
  },
  {
    image: "http://via.placeholder.com/150x150",
    name: "Producto 4",
    price: 400.0,
  },
  {
    image: "http://via.placeholder.com/150x150",
    name: "Producto 5",
    price: 500.0,
  },
  {
    image: "http://via.placeholder.com/150x150",
    name: "Producto 6",
    price: 600.0,
  },
];

Products.bulkCreate(postProducts);