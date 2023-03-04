import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/products";

const initialState = {
  products: [],
  product: {},
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getProducts.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        products: action.payload,
      }))
      .addCase(getProducts.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});



export default productSlice.reducer;
