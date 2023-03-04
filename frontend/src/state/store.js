import { configureStore } from "@reduxjs/toolkit";
import allSlices from "./slices/slice";

export const store = configureStore({
  reducer: {
    data: allSlices,
  },
});
