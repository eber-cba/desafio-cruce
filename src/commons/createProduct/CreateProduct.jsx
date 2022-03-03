import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { useInput } from "../../Hook/useInput";
import { createProduct } from "../../redux/Products";
import { useSnackbar } from "notistack";
import Swal from "sweetalert2";
import "./CreateProduct.css";

export default function CreateProduct() {
  //alerta-estado
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  //estados
  const [button, setButton] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [setForm]=useState("seeet")
  //Efectos
  const Timeline = gsap.timeline({
    defaults: { duration: 1.1, opacity: 0 },
  });

  useEffect(() => {
    const labelCreatufunko = document.querySelectorAll(".labelCreatufunko");
    const Card = document.querySelectorAll(".Card");
    const name = document.querySelectorAll(".name");
    const price = document.querySelectorAll(".price");
    const image = document.querySelectorAll(".image");
    const botonGuardar = document.querySelectorAll(".botonGuardar");
    const botonVolver = document.querySelectorAll(".botonVolver");
    Timeline.from(labelCreatufunko, { y: -300 })
      .from(Card, { x: -200 }, "-=0.3")
      .from(name, { x: 200 })
      .from(price, { x: 200 }, "-=0.6")
      .from(image, { x: 200 }, "-=0.7")
      .from(botonGuardar, { y: 200 }, "-=1.3")
      .from(botonVolver, { y: 200 }, "-=1");
  }, []);

  // Alerta creacion de producto

  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const name = useInput();
  const price = useInput();
  const image = useInput();
  //
  let form = {
    name: name.value,
    price: parseInt(price.value),
    image: image.value,
  };

  //configuracion de alertas
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
  // validaciones
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
  // submitPost
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) {
      mensajeAdvertencia();
    } else {
      dispatch(
        createProduct({
          form: form,
        })
      )
      .then(
        Swal.fire({
          icon: "success",
          title: "Producto creado!",
          text: "Tu producto ah sido creado correctamente (:",
        })
      .then(()=>navigate("/"))

      )
       
    }
  };

   return (
    <div className="padreCreateProduct">
      <div className="contenedorLabel">
        <label className="labelCreatufunko">¡CREA TU FUNKO!</label>
      </div>
      <div className="contenedorGridCreateProduct">
        <Card className="Card" style={{ height: "100%" }}>
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
        <div className="formCreateProduct">
          <form onSubmit={handleSubmit} className="form">
            <div className="name">
              <TextField
                label="Nombre"
                name="name"
                id="standard-basic"
                variant="standard"
                onKeyUp={valid}
                {...name}
              />
            </div>
            <div className="price">
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
            <div className="image">
              <TextField
                id="standard-basic"
                label="Imagen"
                variant="standard"
                name="image"
                {...image}
              />
            </div>
            <div>
              <Button
                className="botonGuardar"
                disabled={button}
                type="submit"
                variant="outlined"
              >
                Guardar
              </Button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
