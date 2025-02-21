import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaID: 13,
    //   name: "mediterranean",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart.filter((item) => item.pizzaID !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaID === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaID === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartQuantity = (state) =>
  state.cart.cart.reduce((acc, curItem) => acc + curItem.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (acc, curItem) => curItem.unitPrice * curItem.quantity + acc,
    0,
  );

export const getCartItems = (state) => state.cart.cart;
