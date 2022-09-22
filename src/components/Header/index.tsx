import {
  ButtonsContainer,
  CartContainer,
  HeaderContainer,
  LocalInformationContainer,
} from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { totalCoffeesOnCart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <NavLink to="/" className="linkToHome">
        <img
          src={logo}
          alt='Copo de café roxo, com símbolo de fogute no meio, ao lado o texto "Coffe Delivery"'
        />
      </NavLink>

      <ButtonsContainer>
        <LocalInformationContainer>
          <MapPin weight="fill" size={22} />
          <span>Campo Grande, MS</span>
        </LocalInformationContainer>

        <CartContainer>
          {totalCoffeesOnCart != 0 && (
            <span className="counter">{totalCoffeesOnCart}</span>
          )}
          <NavLink to="/carrinho" title="Carrinho">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </CartContainer>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
