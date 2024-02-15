export const selectProductsQuantity = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, product) => product.quantity + acc,
    0
  );
};

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, product) => product.price * product.quantity + acc,
    0
  );
};
