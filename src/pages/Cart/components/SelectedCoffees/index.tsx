import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { CardCartCoffee } from "./components/CardCartCoffee";
import {
  RequestButton,
  SelectedCoffeesContainer,
  ValuesInfomationContainer,
} from "./styles";

export function SelectedCoffees() {
  const { cartCoffee } = useContext(CartContext);

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

  return (
    <SelectedCoffeesContainer>
      {cartCoffee.map((coffee) => {
        return (
          <CardCartCoffee
            id={coffee.id}
            image={coffee.image}
            name={coffee.name}
            quantity={coffee.quantity}
            value={coffee.value}
            key={coffee.id}
          />
        );
      })}

      <ValuesInfomationContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ {calculateTotalItemValue()}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ {CardCartCoffee.length !== 0 ? "3,50" : "0,00"}</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>
            R$ {cartCoffee.length !== 0 ? calculateTotalRequestValue() : "0,00"}
          </p>
        </div>
      </ValuesInfomationContainer>

      <RequestButton type="submit">CONFIRMAR PEDIDO</RequestButton>
    </SelectedCoffeesContainer>
  );
}
