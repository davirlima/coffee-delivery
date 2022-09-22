import {
  ButtonsPaymentContainer,
  CartContainer,
  CoffeeCardContainer,
  CountButton,
  FormAddressContainer,
  Frame,
  RemoveButton,
  RequestButton,
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
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface FormAddressData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export function Cart() {
  const { cartCoffee, changeCoffeeCartQuantity, removeCoffeeFromCart } =
    useContext(CartContext);

  function calculateTotalItemValue() {
    const total = cartCoffee.reduce(
      (initialValue, currentValue) =>
        initialValue +
        parseFloat(currentValue.value.replace(",", ".")) *
          currentValue.quantity,
      0
    );
    return total.toFixed(2).replace(".", ",");
  }

  function calculateTotalRequestValue() {
    const total = parseFloat(calculateTotalItemValue()) + 3.5;
    return total.toFixed(2).replace(".", ",");
  }

  const { register, handleSubmit, setValue, setFocus } = useForm();

  register("cep", {
    onBlur: (e) => {
      fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setValue("street", data.logradouro);
          setValue("neighborhood", data.bairro);
          setValue("city", data.localidade);
          setValue("state", data.uf);
          setFocus("number");
        });
    },
  });

  function handleRequest(data: any) {
    console.log(data);
  }

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

          <FormAddressContainer onSubmit={handleSubmit(handleRequest)}>
            <input
              type="text"
              placeholder="CEP"
              id="cep"
              {...register("cep")}
            />
            <input type="text" placeholder="Rua" {...register("street")} />
            <div>
              <input
                type="text"
                placeholder="Número"
                id="numero"
                {...register("number")}
              />
              <input type="text" placeholder="Complemento" id="complemento" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                id="bairro"
                {...register("neighborhood")}
              />
              <input
                type="text"
                placeholder="Cidade"
                id="cidade"
                {...register("city")}
              />
              <input
                type="text"
                placeholder="UF"
                id="uf"
                {...register("state")}
              />
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
          {cartCoffee.map((coffee) => {
            return (
              <CoffeeCardContainer key={coffee.id}>
                <div className="information">
                  <img
                    src={coffee.image}
                    alt={`Imagem de um ${coffee.name} em uma xícara a cima de um pires`}
                  />

                  <div className="details">
                    <h3>{coffee.name}</h3>

                    <div className="buttons">
                      <CountButton>
                        <button
                          onClick={() => {
                            if (coffee.quantity == 1) {
                              toast.warning("A quantidade mínima é 1");
                            } else {
                              changeCoffeeCartQuantity(coffee.id, false);
                            }
                          }}
                        >
                          <Minus weight="bold" size={14} />
                        </button>
                        <span>{coffee.quantity}</span>
                        <button
                          onClick={() => {
                            changeCoffeeCartQuantity(coffee.id, true);
                          }}
                        >
                          <Plus weight="bold" size={14} />
                        </button>
                      </CountButton>

                      <RemoveButton
                        onClick={() => {
                          removeCoffeeFromCart(coffee.id);
                        }}
                      >
                        <Trash size={16} className="icon" />
                        REMOVER
                      </RemoveButton>
                    </div>
                  </div>
                </div>

                <h3 className="value">R${coffee.value}</h3>
              </CoffeeCardContainer>
            );
          })}

          <ValuesInfomationContainer>
            <div>
              <p>Total de itens</p>
              <p>R$ {calculateTotalItemValue()}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {cartCoffee.length !== 0 ? "3,50" : "0,00"}</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>
                R${" "}
                {cartCoffee.length !== 0
                  ? calculateTotalRequestValue()
                  : "0,00"}
              </p>
            </div>
          </ValuesInfomationContainer>

          <RequestButton>CONFIRMAR PEDIDO</RequestButton>
        </SelectedCoffeesContainer>
      </Frame>
    </CartContainer>
  );
}
