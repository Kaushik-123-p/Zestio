import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/cartSlice/CartSlice.js";
import categorySlice from "../slices/categorySlice/categorySlice.js";
import searchSlice from "../slices/searchSlice/searchSlice.js";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: categorySlice,
    search: searchSlice,
  },
});

export default store;
