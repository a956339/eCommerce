import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
  name: "ecomm",
  initialState: {
    item: [],
    TotalPrice: 0,
  },
  // initialState:[],
  reducers: {
    add(state, action) {
      state.item.push({
        quantity: 1,
        id: action.payload.id,
        image: action.payload.image,
        title: action.payload.title,
        price: action.payload.price,
      });
      state.TotalPrice = state.TotalPrice + action.payload.price;
    },
    // remove(state, action) {
    //   state.item = state.item.filter((val) => val.id !== action.payload);
    //  if(item){
    //   state.TotalPrice = state.TotalPrice - item.price * item.quantity;
    //  }
    // },
    remove(state, action) {
      const removedItem = state.item.find((val) => val.id === action.payload);
      if (removedItem) {
        state.TotalPrice -= removedItem.price * removedItem.quantity;
        state.item = state.item.filter((val) => val.id !== action.payload);
      }
    },
    
    increment(state, action) {
      const item = state.item.find((val) => val.id === action.payload);

      if (item) {
        item.quantity++;
        state.TotalPrice = state.TotalPrice + item.price;
      }
    
    },

    decrement(state, action) {
      const item = state.item.find((val) => val.id === action.payload);

      if (item) {
        item.quantity--;
        state.TotalPrice = state.TotalPrice - item.price;
      }
    },
  },
});

export default cartSlices.reducer;
export const { add, remove, increment, decrement } = cartSlices.actions;
