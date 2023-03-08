import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 250,
  cartNumberOfItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const shoeSize = action.payload.size;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id && item.size === shoeSize
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartNumberOfItems += 1;
        state.items.push({ product: newProduct, size: shoeSize, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, shoeSize, amount } = action.payload;

      const cartItem = state.items.find(
        (item) => item.product.id === productId && item.size === shoeSize
      );
      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.cartNumberOfItems -= 1;
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});

export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

const cartSelector = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);
