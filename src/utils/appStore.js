import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //this reducer is a store's reducer which consists different reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
