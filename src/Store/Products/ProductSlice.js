import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchProducts } from "./ProductApi";

const initialState = {
  products: [],
  status: "idle",
};

const productSlice = createSlice({
  initialState,
  name: "products",
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const getProductsThunk = createAsyncThunk(
  "products/addProductThunk",
  async () => {
    const response = await FetchProducts();
    return response.data;
  }
);

export default productSlice.reducer;
