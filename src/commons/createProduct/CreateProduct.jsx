import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useInput } from "../../Hook/useInput";
import { createProduct } from "../../redux/Products";
import { useSnackbar } from "notistack";

import "./CreateProduct.css";
export default function CreateProduct() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [button, setButton] = useState(false);
  const [inputError, setInputError] = useState(false);
  const dispatch = useDispatch();

  const name = useInput();
  const price = useInput();
  const image = useInput();

  let form = {
    name: name.value,
    price: parseInt(price.value),
    image: image.value,
  };
  const messageErrorName =
    "Por favor ingrese correctamente el nombre del producto";
  const messageErrorPrice = "Por favor ingrese solamente NUMEROS";
  const messageAdvertencia =
    "Por favor rellene todos los campos antes de continuar";

  const mensajeErrorNombre = () => {
    enqueueSnackbar(messageErrorName, {
      variant: "error",
    });
  };
  const mensajeErrorPrice = () => {
    enqueueSnackbar(messageErrorPrice, {
      variant: "error",
    });
  };
  const mensajeAdvertencia = () => {
    enqueueSnackbar(messageAdvertencia, {
      variant: "warning",
    });
  };
  let regexName = new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/);
  const valid = (e) => {
    let value = e.target.value;
    if (!regexName.test(value) || /^\s/.test(value)) {
      mensajeErrorNombre();
      setButton(true);
      setInputError(true);
    } else {
      closeSnackbar();
      setInputError(false);

      setButton(false);
    }
  };
  let regexprecio = /^[0-9]*$/;
  const validPrice = (e) => {
    let value = e.target.value;
    if (!regexprecio.test(value) || /^\s/.test(value)) {
      mensajeErrorPrice();
      setButton(true);
      setInputError(true);
    } else {
      closeSnackbar();
      setInputError(false);

      setButton(false);
    }
  };
console.log("FORM",form)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) {
      mensajeAdvertencia();
    } 
    else {
      
      dispatch(
        createProduct({
          form: form,
        })
      )
        .then(alert("Producto creado"))

        .catch((error) => console.log(error));
    }
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
              image={
                !image.value
                  ? "http://via.placeholder.com/150x150"
                  : image.value
              }
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
                onKeyUp={valid}
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
                onKeyUp={validPrice}
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
              <Button disabled={button} type="submit" variant="outlined">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
