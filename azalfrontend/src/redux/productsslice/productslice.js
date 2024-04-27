// productslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cartitem: [],
  oneProduct:[],
};

const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRedux: (state, action) => {
      if (action.payload.message === "No products available") {
        console.log("No products available");
      } else {
        state.allProducts = [...action.payload];
      }
    },

    addcartitemRedux: (state, action) => {
      const check = state.cartitem.some((ele) => {
        return ele.id === action.payload.id;
      });
      if (check) {
        alert("it is already exist in your cart");
      } else {
        const total = action.payload.price;
        state.cartitem = [
          ...state.cartitem,
          { ...action.payload, quantity: 1, total: total },
        ];
      }
      console.log(action.payload);
    },
    addOneProduct:(state,action)=>{
      console.log(action.payload);
      state.oneProduct=action.payload  ;
    }
  },
});

export const { productRedux, addcartitemRedux,addOneProduct } = productslice.actions;
export default productslice.reducer;
