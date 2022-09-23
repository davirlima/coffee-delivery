import { OrderInformationContainer, SuccessRequestContainer } from "./styles";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function SuccessRequest() {
  const { order } = useContext(CartContext);

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
                Entrega em <strong>Rua João Daniel Matinelli, 102</strong>
                {/* {order[order.length - 1] !== undefined &&
                order[order.length - 1].street}
              , {order[order.length - 1].number}{" "}
              {order[order.length - 1].complement != undefined &&
                ` - ${order[order.length - 1].complement}`} */}
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <p>Previsão na entrega</p>
              <strong>Cartão de crédito</strong>
            </div>
          </div>
        </OrderInformationContainer>
      </div>
    </SuccessRequestContainer>
  );
}
