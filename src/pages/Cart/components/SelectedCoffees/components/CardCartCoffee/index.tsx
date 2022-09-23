import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../../../../../contexts/CartContext";
import { CoffeeCardContainer, CountButton, RemoveButton } from "./styles";

interface CardCartCoffeeProps {
  id: string;
  image: string;
  name: string;
  value: string;
  quantity: number;
}

export function CardCartCoffee(coffee: CardCartCoffeeProps) {
  const { changeCoffeeCartQuantity, removeCoffeeFromCart } =
    useContext(CartContext);

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
                onClick={(e) => {
                  e.preventDefault();
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
                onClick={(e) => {
                  e.preventDefault();
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
}
