// Redux
import UserActionsType from "./actions-type";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionsType.LOGIN:
      return { ...state, currentUser: action.payload };

    case UserActionsType.LOGOUT:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default userReducer;
