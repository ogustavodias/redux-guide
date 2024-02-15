// React
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import UserActionsType from "../../redux/user/actions-type";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch({
      type: UserActionsType.LOGIN,
      payload: { name: "gustavo", email: "gustavo@gmail.com" },
    });
  };

  const handleLogoutClick = () => {};

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLoginClick}>Login</div>
        ) : (
          <div onClick={handleLogoutClick}>Sair</div>
        )}

        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
