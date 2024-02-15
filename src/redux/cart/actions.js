import CartActionsType from "./actions-type";

export const addProductToCart = (payload) => {
  return {
    type: CartActionsType.ADD_PRODUCT,
    payload,
  };
};

export const removeProductOfCart = (payload) => {
  return {
    type: CartActionsType.REMOVE_PRODUCT,
    payload,
  };
};

export const increaseQuantityOfProductInCart = (payload) => {
  return {
    type: CartActionsType.INCREASE_PRODUCT,
    payload,
  };
};

export const decreaseQuantityOfProductInCart = (payload) => {
  return {
    type: CartActionsType.DECREASE_PRODUCT,
    payload,
  };
};
