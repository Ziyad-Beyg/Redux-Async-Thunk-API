import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Products/ProductSlice";
import CartReducer from "./Cart/CartSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
