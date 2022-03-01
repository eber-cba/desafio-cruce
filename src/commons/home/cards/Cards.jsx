import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';

import {   animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

 

import "./Cards.css";

export default function Cards() {
 
  var scroll = Scroll.animateScroll;
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(9);
  
  const scrollTop=()=>{
    scroll.scrollToTop();
  }

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("http://localhost:8080/api/products");
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, [post]);

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <div className="padreGrid">
        <div  className="scroll"  >
        <img onClick={scrollTop} src="/subir.svg"/>
      </div>
      <div className="CardGrid">
        {currentPost.map((product, i) => {
          return (
            <div key={i}>
              <Card style={{ height: "100%" }}>
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
                <div className="divCarrito">
                  <img
                    src="/carrito.svg"
                    height="70px"
                    width="50px"
                    alt="carrito"
                  />
                </div>
              </Card>
            </div>
          );
        })}
      </div>

    

      <div className="divPagination">
        <button
          className="boton-flecha-izquierda"
          onClick={() => setNumber(number - 1)}
        >
       <img src="/flechaizquierda.svg" alt="flecha-izquierda"/>
        </button>

        {pageNumber.map((Elem, i) => {
          return (
            <div key={i}>
              <button
                className="botones-numeros"
                onClick={() => ChangePage(Elem)}
              >
                {Elem}
              </button>
            </div>
          );
        })}
        <button
          className="boton-flecha-derecha"
          onClick={() => setNumber(number + 1)}
        >
          <img src="/flechaderecha.svg"/>
        </button>
      </div>
    </div>
  );
}
