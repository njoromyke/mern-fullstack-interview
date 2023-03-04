import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
