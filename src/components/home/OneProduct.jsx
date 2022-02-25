import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";


import { CardActionArea } from "@mui/material";
// import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

// const match = useRouteMatch();

// const oneMovie = match.params.id;




export default function () {
    const Product = useParams().id
    console.log("PRODUCTO PARAM",Product);
    const [product,setProduct]= useState([])

    useEffect(() => {
        axios
          .get(`http://localhost:8080/api/products/${Product}`)
   
          .then((data) => setProduct(data.data))
          .catch((error)=>console.log(error))
      },[Product]);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Card   >
            <CardActionArea>

              <CardMedia
                component="img"
                height={200}
                width={500}
                
                alt="green iguana"
                image={product.image}
              />
             
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 nombre: {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  precio $: {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    </div>
  );
}
