import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const alreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (alreadyInCart) {
        // Se o produto já estiver no carrinho, acrescenta + 1 na quantidade.
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }

      // Caso contrário, adiciona o produto.
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    increaseQuantity(state, action) {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? {
              ...action.payload,
              quantity: action.payload.quantity + 1,
            }
          : product
      );
    },

    decreaseQuantity(state, action) {
      state.products = state.products
        .map((product) =>
          product.id === action.payload.id
            ? {
                ...action.payload,
                quantity: action.payload.quantity - 1,
              }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;