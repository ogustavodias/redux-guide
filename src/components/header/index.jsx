// React
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";
import { selectProductsQuantity } from "../../redux/cart/cart.selectors";

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
    const payload = { name: "gustavo", email: "gustavo@hotmail.com" };
    dispatch(loginUser(payload));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  const productsQuantity = useSelector(selectProductsQuantity);

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productsQuantity})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
