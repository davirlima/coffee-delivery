import { CoffeesProps } from "../..";
import {
  BuyContainer,
  Card,
  CartButton,
  CounterContainer,
  DescriptionContainer,
  ImageContainer,
} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

export function CoffeeCard(coffee: CoffeesProps) {
  return (
    <Card>
      <ImageContainer>
        <img
          src={coffee.image}
          alt={`Imagem de um ${coffee.name} em uma xícara a cima de um pires`}
        />
        <div>
          {coffee.filter.map((tag) => {
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
            <button>
              <Minus weight="bold" size={14} />
            </button>
            1
            <button>
              <Plus weight="bold" size={14} />
            </button>
          </CounterContainer>

          <CartButton>
            <ShoppingCartSimple weight="fill" size={19.74} />
          </CartButton>
        </div>
      </BuyContainer>
    </Card>
  );
}
