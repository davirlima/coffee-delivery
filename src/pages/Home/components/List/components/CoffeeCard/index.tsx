import { CoffeesProps } from "../../../../../../data/coffees";
import {
  BuyContainer,
  Card,
  CartButton,
  CounterContainer,
  DescriptionContainer,
  ImageContainer,
} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

export function CoffeeCard(coffee: CoffeesProps) {
  const {
    addCoffeeInCart,
    changeCoffeeCartQuantity,
    verifyIfCoffeeAlreadyStayOnCart,
  } = useContext(CartContext);

  const [quantityOfCoffee, setQuantityOfCoffee] = useState(1);

  return (
    <Card>
      <ImageContainer>
        <img
          src={coffee.image}
          alt={`Imagem de um ${coffee.name} em uma xícara a cima de um pires`}
        />
        <div>
          {coffee.kind.map((tag) => {
            return <h3 key={tag + ""}>{tag}</h3>;
          })}
        </div>
      </ImageContainer>

      <DescriptionContainer>
        <h1>{coffee.name}</h1>
        <p>{coffee.description}</p>
      </DescriptionContainer>

      <BuyContainer>
        <h2>
          <span>R$ </span>
          {coffee.value}
        </h2>

        <div>
          <CounterContainer>
            <button
              onClick={() => {
                if (quantityOfCoffee == 1) {
                  alert("A quantidade mínima de um café é 1");
                } else {
                  setQuantityOfCoffee(quantityOfCoffee - 1);
                  changeCoffeeCartQuantity(coffee.id, false);
                }
              }}
            >
              <Minus weight="bold" size={14} />
            </button>
            {quantityOfCoffee}
            <button
              onClick={() => {
                if (!verifyIfCoffeeAlreadyStayOnCart(coffee.id)) {
                  alert("Primeiramente, adicione o café no carrinho!");
                } else {
                  setQuantityOfCoffee(quantityOfCoffee + 1);
                  changeCoffeeCartQuantity(coffee.id, true);
                }
              }}
            >
              <Plus weight="bold" size={14} />
            </button>
          </CounterContainer>

          <CartButton
            onClick={() => {
              addCoffeeInCart(coffee);
            }}
          >
            <ShoppingCartSimple weight="fill" size={19.74} />
          </CartButton>
        </div>
      </BuyContainer>
    </Card>
  );
}
