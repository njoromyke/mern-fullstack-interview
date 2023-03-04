import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getProduct, getProducts, login, register, updateProduct } from "../actions/actions";

const initialState = {
  products: [],
  product: {},
  loading: false,
  user: null,
};

export const allSlices = createSlice({
  name: "slices",
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
        products: action.payload.products,
      }))
      .addCase(getProducts.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(login.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        user: action.payload,
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(register.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        user: action.payload,
      }))
      .addCase(register.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(getProduct.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getProduct.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        product: action.payload.product,
      }))
      .addCase(getProduct.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(updateProduct.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(updateProduct.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        product: action.payload,
      }))
      .addCase(updateProduct.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(deleteProduct.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(deleteProduct.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        product: action.payload,
      }))
      .addCase(deleteProduct.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export default allSlices.reducer;
