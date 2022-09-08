import {
  ButtonsContainer,
  CartContainer,
  HeaderContainer,
  LocalInformationContainer,
} from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt='Copo de café roxo, com símbolo de fogute no meio, ao lado o texto "Coffe Delivery"'
      />

      <ButtonsContainer>
        <LocalInformationContainer>
          <MapPin weight="fill" size={22} />
          <span>Campo Grande, MS</span>
        </LocalInformationContainer>

        <CartContainer>
          <ShoppingCart weight="fill" size={22} />
        </CartContainer>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
