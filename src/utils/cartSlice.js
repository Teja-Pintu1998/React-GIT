import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {

      // const newstate = [...state]
      //newState.items.push()
      state.items.push(action.payload);
      //mutating the state here
      //here, write the logic to add the items
      //RTK says either mutate the existist state or return the new state
    },
    removeItem: (state, action) => {
      state.items.pop();
      //mutating the state here
      //here, write the logic to remove the items
    },
    clearCart: (state) => {
      state.items.length = 0;
      //mutating the state here
      //here, write the logic to clear the cart
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

