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
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});
  const [state, setState] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const producto = useSelector((state) => state.products);

  const Product = useParams().id;

  useEffect(() => {
    dispatch(getProduct({ Product }))
      .then(({ payload }) => payload)
      .catch((err) => console.log(err));
  }, [producto]);

  const name = CustomHook("Nombre", producto.name);
  const price = CustomHook("price", producto.price);
  const image = CustomHook("image", producto.image);

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
      .then(alert("se guardo bien esperemos.."))
      .catch((error) => console.log(error));
  };
  const deleteProduc = (e) => {
    e.preventDefault();
    dispatch(
      deleteProduct({
        id: producto.id,
      })
    )
      .then(alert("borrado."))
      .then(navigate("/"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="padre">
      <div className="divGridCard">
        <Card style={{ height: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
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
              <Button onClick={deleteProduc} variant="outlined">
            Eliminar
          </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Product;
