import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { CardActionArea } from "@mui/material";
import "./Product.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import { CustomHook } from "../../../Hook/CustomHook";
import {
  updateProduct,
  deleteProduct,
  getProduct,
} from "../../../redux/Products";

import Skeleton from "@mui/material/Skeleton";
import Swal from "sweetalert2";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const producto = useSelector((state) => state.products);

  const Product = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct({ Product }))
      .then(({ payload }) => payload)
      .catch((err) => console.log(err));
  }, []);

  const name = CustomHook("Nombre", producto.name);
  const price = CustomHook("price", producto.price);
  const image = CustomHook("image", producto.image);

  const [button, setButton] = useState(false);
  const [inputError, setInputError] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: producto.id,
        name: name.value,
        price: parseInt(price.value),
        image: image.value,
      })
    )
      .then(
        Swal.fire({
          icon: "success",
          title: "Producto Editado!",
          text: "Tu producto fue editado correctamente (:",
        })
      )
      .then(dispatch(getProduct({ Product })))
      .catch((error) => console.log(error));
  };
  const deleteProduc = (e) => {
    e.preventDefault();
    dispatch(
      deleteProduct({
        id: producto.id,
      })
    )
      .then(
        Swal.fire({
          icon: "success",
          title: "Producto Elimanado!",
          text: "Tu producto fue eliminado correctamente (:",
        }).then(() => navigate("/"))
      )

      .catch((error) => console.log(error));
  };
  return (
    <div className="padre">
      <div className="divGridCard">
        <Card style={{ height: "100%" }}>
          <CardActionArea>
            {!producto.image ? (
              <Skeleton
                sx={{ height: 400 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                alt="card"
                image={producto.image}
              />
            )}

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
            <div className="botones">
              <Button type="submit" variant="outlined" disabled={button}>
                Guardar
              </Button>
              <Button onClick={deleteProduc} variant="outlined">
                Eliminar
              </Button>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={"/"}
              >
                <Button style={{ color: "black",fontWeight:"bold" }}>Volver</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Product;
