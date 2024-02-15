import CartActionsType from "./actions-type";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsType.ADD_PRODUCT:
      // Constante onde é feita a busca do produto no carrinho.
      const alreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (alreadyInCart)
        // Se o produto já estiver no carrinho, acrescenta + 1 na quantidade.
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };

      // Caso contrário, adiciona o produto.
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionsType.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case CartActionsType.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map( product =>  product.id === action.payload.id ? {
          ...action.payload, quantity: action.payload.quantity + 1
        } : product)
      };

    case CartActionsType.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map( product =>  product.id === action.payload.id ? {
          ...action.payload, quantity: action.payload.quantity - 1
        } : product).filter(product => product.quantity > 0)
      };
    default:
      return state;
  }
};

export default cartReducer;
