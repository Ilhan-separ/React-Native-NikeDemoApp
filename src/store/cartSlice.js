import { createSlice } from "@reduxjs/toolkit";
import cart from "../data/cart";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const shoeSize = action.payload.size;
      const cartItem = state.items.find(
        (i) => i.product.id === newProduct.id && i.size === shoeSize
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, size: shoeSize, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});
