import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import { useDispatch, useSelector } from "react-redux";

import { CustomHook } from "../../Hook/CustomHook";
import { createProduct } from "../../redux/Products";
import "./CreateProduct.css";
export default function CreateProduct() {
  const dispatch = useDispatch();

  const name = CustomHook();
  const price = CustomHook();
  const image = CustomHook();

  let form = {
    name: name.value,
    price: parseInt(price.value),
    image: image.value,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        form: form,
      })
    )
      .then(alert("Producto creado"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="padreCreateProduct">
      <div className="contenedorGridCreateProduct">
        <Card style={{ height: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              alt="card"
              image={!image.value?"http://via.placeholder.com/150x150":image.value}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                nombre: {name.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                precio $: {price.value}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div>
              <TextField
                label="Name"
                name="name"
                id="standard-basic"
                variant="standard"
                {...name}
              />
            </div>
            <div>
              <TextField
                id="filled-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                label="Precio"
                variant="standard"
                name="price"
                {...price}
              ></TextField>
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Imagen"
                variant="standard"
                name="image"
                {...image}
              />
            </div>
            <div>
              <Button type="submit" variant="outlined">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
