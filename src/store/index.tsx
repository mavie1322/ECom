import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./basket-slices";
import { categoriesSlice } from "./categories-slices";
import { itemsSlice } from "./items-slice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    categories: categoriesSlice.reducer,
    basket: basketSlice.reducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
