import {
  ButtonsPaymentContainer,
  CartContainer,
  FormAddressContainer,
  Frame,
  FrameContentContainer,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";

export function Cart() {
  return (
    <CartContainer>
      <Frame>
        <h1>Complete seu pedido</h1>

        <FrameContentContainer>
          <div className="header">
            <MapPinLine size={22} className="icon-yellow_dark" />
            <div>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <FormAddressContainer action="">
            <input type="text" placeholder="CEP" id="cep" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" id="numero" />
              <input type="text" placeholder="Complemento" id="complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" id="bairro" />
              <input type="text" placeholder="Cidade" id="cidade" />
              <input type="text" placeholder="UF" id="uf" />
            </div>
          </FormAddressContainer>
        </FrameContentContainer>

        <FrameContentContainer>
          <div className="header">
            <CurrencyDollar size={22} className="icon-purple" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <ButtonsPaymentContainer>
            <div>
              <input type="radio" id="credit" name="payment" />
              <label htmlFor="credit">
                <CreditCard className="icon" /> CARTÃO DE CRÉDITO
              </label>
            </div>
            <div>
              <input type="radio" id="debit" name="payment" />
              <label htmlFor="debit">
                <Bank className="icon" /> CARTÃO DE DÉBITO
              </label>
            </div>
            <div>
              <input type="radio" id="money" name="payment" />
              <label htmlFor="money">
                <Money className="icon" /> DINHEIRO
              </label>
            </div>
          </ButtonsPaymentContainer>
        </FrameContentContainer>
      </Frame>
      <Frame>
        <h1>Cafés selecionados</h1>
        <div></div>
      </Frame>
    </CartContainer>
  );
}
