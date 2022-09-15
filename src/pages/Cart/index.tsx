import { CartContainer, Frame } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <Frame>
        <h1>Complete seu pedido</h1>
        <div>
          <div></div>
          <div></div>
        </div>
      </Frame>
      <Frame>
        <h1>Cafés selecionados</h1>
        <div></div>
      </Frame>
    </CartContainer>
  );
}
