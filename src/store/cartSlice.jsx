import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalItems: 0,
  discount: 1000,
  totalAmount: 0,
  deliveryCharge: 2000,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    AddToCart(state, action) {
      const tempItem = state.data.find((item) => item.id === action.payload.id);
      if (tempItem) {
        const addedItem = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.price;
            return { ...item, quantity: newQty, totalPrice: newTotalPrice };
          } else {
            return item;
          }
        });
        state.data = addedItem;
      } else {
        state.data.push(action.payload);
      }
    },
    // remove from cart
    RemoveFromCart(state, action) {
      const removeItem = state.data.filter(
        (item) => item.id !== action.payload
      );
      state.data = removeItem;
    },
    // clear cart
    clearCart(state, action) {
      state.data = [];
    },
    // total of cart
    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
    // toggle cart quantity
    getCartQuantity(state, action) {
      const cartQuantity = state.data.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INCREASE") {
            tempQty++;
            tempTotalPrice = tempQty * item.price;
          }
          if (action.payload.type === "DECREASE") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.price;
          }
          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });
      state.data = cartQuantity;
    },
  },
  extraReducers: {

  },
});

export const { AddToCart, RemoveFromCart, clearCart, getCartTotal, getCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
