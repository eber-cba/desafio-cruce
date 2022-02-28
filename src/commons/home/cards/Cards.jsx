import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material"; 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Cards.css";

export default function Cards() {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    return () => {
      setState({}); // This worked for me
    };
  }, []);

  return (
    <div className="padreGrid">
      <div className="CardGrid">
        {products.map((product, i) => {
          return (
            <div  key={i}>
              <Card  style={{ height: "100%" }} >
                <CardActionArea
                className="cardActionArea"
                   
                >
                  <Link to={`/products/${product.id}`}>
                    <CardMedia
                      className="CardImage"
                      component="img"                       
                      alt="cards"
                      image={product.image}
                    />
                  </Link>
                  <CardContent className="card-content">
                    <label> Funko </label>
                    <Typography gutterBottom variant="h5" component="div">
                      Funko POP | {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     5 cuotas de 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Precio: ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
       
    </div>
  );
}
