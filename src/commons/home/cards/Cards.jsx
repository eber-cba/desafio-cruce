import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Cards.css";

export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [products]);

  return (
    <div className="padreGrid">
      <div className="CardGrid">
        {products.map((product, i) => {
          return (
            <div key={i}>
              <Card style={{ height: '100%' }}>
                <CardActionArea>
                  <Link to={`/products/${product.id}`}>
                    <CardMedia
                      className="CardImage"
                      component="img"
                      height="100%"
                      width="100%"
                      alt="cards"
                      image={product.image}
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="pagination"></div>
    </div>
  );
}
