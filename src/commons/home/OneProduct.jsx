import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { useState, useEffect,useLayoutEffect } from "react";
import { CardActionArea } from "@mui/material";
import "./Product.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import { CustomHook } from "../../Hook/CustomHook";
import { updateProduct } from "../../redux/Products";
import { getProduct } from "../../redux/Products";

export default function () {
  const producto = useSelector((state) => state.products);
  const name = CustomHook(producto.name);
  const price = CustomHook(producto.price);
  const image = CustomHook(producto.price);

  const dispatch = useDispatch();
  const Product = useParams().id;

 
  useEffect(() => {
    dispatch(getProduct({ Product }))
      .then(({ payload }) => payload)
      .catch((err) => console.log(err));
  },[producto] );
  let form = {
    name: name.value,
    price: parseInt(price.value),
    image: image.value,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: producto.id,
        form: form,
      })
    )
      .then(alert("se guardo bien esperemos.."))
      .catch((error) => console.log(error));
  };
  return (
    <div className="padre">
      <div id="contenedor">
        <div className="card">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height={200}
                width={500}
                alt="card"
                image={producto.image}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  nombre: {producto.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  precio $: {producto.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <TextField name= "name" id="standard-basic" variant="standard" {...name} />
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
  );
}
