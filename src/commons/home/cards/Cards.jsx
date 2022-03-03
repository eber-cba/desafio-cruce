import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import IconButton from "@mui/material/IconButton";
import "./Cards.css";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

export default function Cards() {
  var scroll = Scroll.animateScroll;
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(9);
  const dispatch = useDispatch();
  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("http://localhost:8080/api/products");
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, []);

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  const flechaHaciaLaIzquerda = () => {
    if (number - 1 === 0) {
      setNumber(number);
    } else {
      setNumber(number - 1);
    }
  };
  const flechaHaciaLaDerecha = () => {
    if (number - 1 === 0) {
      setNumber(number - 1);
    } else {
      setNumber(number + 1);
    }
  };

  //

  return (
    <div className="padreGrid">
      <div className="scroll">
        <img onClick={scrollTop} src="/subir.svg" />
      </div>
      <div className="CardGrid">
        {post && currentPost.length != 0 ? (
          currentPost.map((product, i) => {
            return (
              <div key={i}>
                <Card
                  className="only-card"
                  style={{ border: "none", boxShadow: "none", height: "100%" }}
                >
                  <CardActionArea className="cardActionArea">
                    <Link to={`/products/${product.id}`}>
                      <img
                        className="CardImage"
                        component="img"
                        alt="cards"
                        src={product.image}
                      />
                    </Link>
                    <CardContent className="card-content">
                      <label className="labelFunko"> Funko </label>
                      <Typography gutterBottom variant="h5" component="div">
                        Funko POP | {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                       6 coutas sin interes de
                      </Typography>
                      <Typography variant="body1" >
                       <b>$442</b>
                      </Typography>
                      <label>
                        Final: ${product.price}
                      </label>
                      <div className="divCarrito">
                    <Tooltip title="Agregar">
                   
                        <img
                          src="/carrito.svg"
                          height="70px"
                          width="50px"
                          alt="carrito"
                        />
                   
                    </Tooltip>
                  </div>
                    </CardContent>
                  </CardActionArea>
                 
                </Card>
              </div>
            );
          })
        ) : (
          <div className="circularProgress">
            <CircularProgress />
          </div>
        )}
      </div>

      <div className="divPagination">
        <button className="botonFlecha" onClick={flechaHaciaLaIzquerda}>
          <img
            className="imgFlecha"
            src="/flechaizquierda.svg"
            alt="flecha-izquierda"
          />
        </button>

        {pageNumber.map((Elem, i) => {
          return (
            <div className="botonesNumeros" key={i}>
              <button
                className="botones-numeros"
                onClick={() => ChangePage(Elem)}
              >
                {Elem}
              </button>
            </div>
          );
        })}
        <button className="botonFlecha" onClick={flechaHaciaLaDerecha}>
          <img
            className="imgFlecha"
            src="/flechaderecha.svg"
            alt="flecha-derecha"
          />
        </button>
      </div>
    </div>
  );
}
