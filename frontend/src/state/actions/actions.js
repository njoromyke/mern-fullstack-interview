import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendDeleteRequest, sendGetRequest, sendPostRequest, sendUpdateRequest } from "../../helpers/utils/url.util";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const url = "/products";
  return await sendGetRequest(url, "Products fetched successfully");
});

export const getProduct = createAsyncThunk("products/getProduct", async (id, message) => {
  const url = `/products/${id}`;
  return await sendGetRequest(url, message);
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  const url = `/products/${id}`;
  return await sendDeleteRequest(url, "Products deleted successfully");
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (data) => {
  const url = `/products/${data._id}`;
  return await sendUpdateRequest(url, data, "Product updated successfully");
});

export const createProduct = createAsyncThunk("products/createProduct", async (data) => {
  const url = "/products";
  return await sendPostRequest(url, data, "Product created successfully");
});

export const login = createAsyncThunk("user/login", async (data) => {
  const url = "/users/login";
  return await sendPostRequest(url, data, "Login successful");
});

export const register = createAsyncThunk("user/register", async (data) => {
  const url = "/users";
  return await sendPostRequest(url, data, "Registration successful");
});
