import React from 'react'
import Home from '../components/home/Home'
import { useSelector, } from "react-redux";
import {allProducts} from "./Products"

export default function UseCardHome() {
  console.log("allproducts",allProducts)
    const selectorProducts = useSelector(({products}) => products);
    console.log("selectoooor)>",selectorProducts)
  return <Home 
  selectorProducts={selectorProducts}/>

    
}
