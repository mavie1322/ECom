import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState } from "../models";

const initialCategoriesState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    storeCategories(state, action: PayloadAction<CategoriesState>) {
      if (state.categories.length === 0) {
        state.categories = action.payload.categories;
      }
    },
    addCategory() {},
  },
});

export const categoriesActions = categoriesSlice.actions;
