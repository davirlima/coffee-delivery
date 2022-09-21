import {
  ButtonsPaymentContainer,
  CartContainer,
  CoffeeCardContainer,
  CountButton,
  FormAddressContainer,
  Frame,
  RemoveButton,
  RequestContainer,
  SelectedCoffeesContainer,
  ValuesInfomationContainer,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from "phosphor-react";
import tradicional from "../../assets/KindsOfCoffees/tradicional.png";
import latte from "../../assets/KindsOfCoffees/latte.png";

export function Cart() {
  return (
    <CartContainer>
      <Frame>
        <h1>Complete seu pedido</h1>

        <RequestContainer>
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
        </RequestContainer>

        <RequestContainer>
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
        </RequestContainer>
      </Frame>
      <Frame>
        <h1>Cafés selecionados</h1>

        <SelectedCoffeesContainer>
          <CoffeeCardContainer>
            <div className="information">
              <img src={tradicional} alt="" />

              <div className="details">
                <h3>Expresso Tradicional</h3>

                <div className="buttons">
                  <CountButton>
                    <button>
                      <Minus weight="bold" size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus weight="bold" size={14} />
                    </button>
                  </CountButton>

                  <RemoveButton>
                    <Trash size={16} className="icon" />
                    REMOVER
                  </RemoveButton>
                </div>
              </div>
            </div>

            <h3 className="value">R$9,90</h3>
          </CoffeeCardContainer>

          <CoffeeCardContainer>
            <div className="information">
              <img src={latte} alt="" />

              <div className="details">
                <h3>Latte</h3>

                <div className="buttons">
                  <CountButton>
                    <button>
                      <Minus weight="bold" size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus weight="bold" size={14} />
                    </button>
                  </CountButton>

                  <RemoveButton>
                    <Trash size={16} className="icon" />
                    REMOVER
                  </RemoveButton>
                </div>
              </div>
            </div>

            <h3 className="value">R$9,90</h3>
          </CoffeeCardContainer>

          <ValuesInfomationContainer>
            <div>
              <p>Total de itens</p>
              <p>R$ 00,00</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>R$ 00,00</p>
            </div>
          </ValuesInfomationContainer>
        </SelectedCoffeesContainer>
      </Frame>
    </CartContainer>
  );
}
