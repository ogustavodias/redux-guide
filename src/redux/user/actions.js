import UserActionsType from "../../redux/user/actions-type";

export const loginUser = (payload) => ({
  type: UserActionsType.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: UserActionsType.LOGOUT,
});
