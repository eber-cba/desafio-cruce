import { createReducer, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
 
export const setProducts = createAction("SET_Products");

export const allProducts= createAsyncThunk("PRODUCTS",()=>{

    return axios.get(`http://localhost:8080/api/products`)
    .then((res)=>(res.data))
    .catch((err) => {
        console.log("ERROR", err);
      });

})



const productsReducer = createReducer([],{
    [setProducts]: (state, action) => action.payload,
  [allProducts.fulfilled]:(state, action) =>  action.payload
})
export default productsReducer