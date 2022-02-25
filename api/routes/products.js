const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/products");

router.get("/", productsControllers.findProducts);
router.get("/:id",productsControllers.findoOneProductId)
router.post("/", productsControllers.createProducts);
router.put("/:id", productsControllers.editProducts);
router.delete("/:id", productsControllers.deleteProducts);

module.exports = router;
