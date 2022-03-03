import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAction("SET_Products");

export const createProduct = createAsyncThunk(
  "CREATE_PRODUCT",
   ({ form }) => {
  return axios
    .post(`http://localhost:8080/api/products/`,form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const updateProduct = createAsyncThunk(
  "UPDATE_PRODUCT",
  ({ id, name,price,image  }) => {
    return axios
      .put(`http://localhost:8080/api/products/${id}`,{name,price,image} )
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);
export const deleteProduct = createAsyncThunk(
  "DELETE_PRODUCT",
  ({ id }) => {
    return axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);
export const getProduct = createAsyncThunk("GET_PRODUCT", ({ Product }) => {
  return axios
    .get(`http://localhost:8080/api/products/${Product}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return false;
    });
});
export const getAllProduct = createAsyncThunk("GET_ALL_PRODUCT", () => {
  return axios
    .get(`http://localhost:8080/api/products/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});
const productsReducer = createReducer([], {
  [setProducts]: (state, action) => (state = action.payload),
  [createProduct.fulfilled]: (state, action) => action.payload,
  [updateProduct.fulfilled]: (state, action) => action.payload,
  [getProduct.fulfilled]: (state, action) => action.payload,
  [deleteProduct.fulfilled]: (state, action) => action.payload,
  [getAllProduct.fulfilled]: (state, action) => action.payload,
});
export default productsReducer;
