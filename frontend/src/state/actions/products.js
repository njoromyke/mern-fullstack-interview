import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendGetRequest } from "../../helpers/utils/url.util";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const url = "/products";
  return await sendGetRequest(url, "Products fetched successfully");
});
