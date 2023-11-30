import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchCart, AddToCart, DeleteFromCart, UpdateInCart } from "./CartApi";

let initialState = {
  cartItems: [],
  status: "idle",
};

const CartSlice = createSlice({
  initialState,
  name: "cartItems",
  reducers: {
    increment: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[index].quantity += 1;
    },
    decrement: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[index].quantity > 1
        ? (state.cartItems[index].quantity -= 1)
        : state.cartItems[index];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartItemThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems = action.payload;
      })
      .addCase(getCartItemThunk.rejected, (state) => {
        state.status = "rejected";
      })

      .addCase(addCartItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCartItemThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems.push(action.payload);
      })
      .addCase(addCartItemThunk.rejected, (state) => {
        state.status = "rejected";
      })

      .addCase(updateCartItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItemThunk.fulfilled, (state, action) => {
        state.status = "idle";
        let index = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartItems.splice(index, 1, action.payload);
      })
      .addCase(updateCartItemThunk.rejected, (state) => {
        state.status = "rejected";
      })

      .addCase(deleteCartItemThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartItemThunk.fulfilled, (state, action) => {
        state.status = "idle";
        let index = state.cartItems.findIndex(
          (item) => item.id === action.payload
        );
        state.cartItems.splice(index, 1);
      })
      .addCase(deleteCartItemThunk.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const getCartItemThunk = createAsyncThunk(
  "cartItems/FetchCart",
  async () => {
    let response = await FetchCart();
    return response.data;
  }
);

export const addCartItemThunk = createAsyncThunk(
  "cartItems/AddToCart",
  async (item) => {
    let { id, title, price, description, thumbnail } = item;
    let response = await AddToCart({
      id,
      title,
      price,
      description,
      thumbnail,
      quantity: 1,
    });
    return response.data;
  }
);

export const updateCartItemThunk = createAsyncThunk(
  "cartItems/UpdateInCart",
  async ({ id, changedItem }) => {
    let response = await UpdateInCart(id, changedItem);
    return response.data;
  }
);

export const deleteCartItemThunk = createAsyncThunk(
  "cartItems/DeleteFromCart",
  async (id) => {
    await DeleteFromCart(id);
    return id;
  }
);

export const { increment, decrement } = CartSlice.actions;

export default CartSlice.reducer;
