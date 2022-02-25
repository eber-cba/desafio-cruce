// server configs
const express = require("express");
const app = express();
const cors = require("cors");
const Product = require("./models/Products");
const db = require("./db");
const router = require("./routes/index");

// parsing middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

db.sync({ force: false })
  .then(function () {
    app.listen(8080, () =>
      console.log("Servidor escuchando en el puerto 8080")
    );
  })
  .catch(console.error);
