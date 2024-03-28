import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux toolkit uses immer.js behind the sceens
      state.items.push(action.payload);
    },

    removeItem: (state, _action) => {
      state.items.pop();
    },

    clearCart: (state, _action) => {
      state.items.length = 0;

      // We cannot do like this "state = []" because we are changing the state
      // Instead we are changing the reference, so immer will not find any change
      // All the changes will be done locally so, we need to modify the state.

      // below way of returning will also work..
      // return {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
