import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketItem, BasketState } from "../models";

const initialBasketState: BasketState = {
  items: [],
  total_quantity: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialBasketState,
  reducers: {
    getItemInBasket() {},
    addItemToBasket(state, action: PayloadAction<BasketItem>) {
      const newItem = action.payload;
      let isItemExist = state.items.find(
        (item) => item.item_basket.item_id === newItem.item_basket.item_id
      );
      if (isItemExist) {
        isItemExist.quantity_ordered++;
        // isItemExist.total_price += newItem.item_basket.price;
      } else {
        state.items.push(action.payload);
      }

      state.total_quantity++;
    },
    removeItemFromBasket() {},
    reduceItemQuantity() {},
  },
});

export const basketActions = basketSlice.actions;
