import { OrderInformationContainer, SuccessRequestContainer } from "./styles";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import illustration from "../../assets/successPageIllustration.svg";

export function SuccessRequest() {
  const { order } = useContext(CartContext);

  const street = order[order.length - 1]?.street;
  const number = order[order.length - 1]?.number;
  const neighborhood = order[order.length - 1]?.neighborhood;
  const city = order[order.length - 1]?.city;
  const state = order[order.length - 1]?.state;
  const complement = order[order.length - 1]?.complement;
  const payment = order[order.length - 1]?.payment;
  const formatedPayment =
    payment === "creditCard"
      ? "Cartão de Crédito"
      : payment === "debitCard"
      ? "Cartão de Débito"
      : payment === "money"
      ? "Dinheiro"
      : undefined;

  return (
    <SuccessRequestContainer>
      <div className="success-text">
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </div>
      <div className="content">
        <OrderInformationContainer>
          <div>
            <div className="icon background-purple">
              <MapPin weight="fill" size={16} />
            </div>
            <div className="address">
              <p>
                Entrega em{" "}
                <strong>
                  {`${street}, ${number}`}
                  {complement != undefined && ` - ${complement}`}
                </strong>
              </p>
              <p>{`${neighborhood} - ${city}, ${state}`}</p>
            </div>
          </div>

          <div>
            <div className="icon background-yellow">
              <Timer weight="fill" size={16} />
            </div>
            <div className="address">
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div>
            <div className="icon background-yellow_dark">
              <CurrencyDollar weight="regular" size={16} />
            </div>
            <div className="address">
              <p>Pagamento na entrega</p>
              <strong>{formatedPayment}</strong>
            </div>
          </div>
        </OrderInformationContainer>
        <img
          src={illustration}
          alt="Ilustratção de um homem montado em uma motocilcleta roxa"
        />
      </div>
    </SuccessRequestContainer>
  );
}
