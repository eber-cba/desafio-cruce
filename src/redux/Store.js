  
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./Products";



const Store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
      products:productsReducer,
     
     
  },
});

export default Store;