import {
  BenefitContainer,
  IntroductionContainer,
  ItemsContainer,
  TitleContainer,
} from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import coffeeImage from "../../../../assets/coffeeImage.png";

export function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </TitleContainer>

        <ItemsContainer>
          <BenefitContainer color="yellow_dark">
            <div>
              <ShoppingCart weight="fill" />
            </div>
            <h3>Compra simples e segura</h3>
          </BenefitContainer>

          <BenefitContainer color="gray">
            <div>
              <Package weight="fill" />
            </div>
            <h3>Embalagem mantém o café intacto</h3>
          </BenefitContainer>

          <BenefitContainer color="yellow">
            <div>
              <Timer weight="fill" />
            </div>
            <h3>Entrega rápida e rastreada</h3>
          </BenefitContainer>

          <BenefitContainer color="purple">
            <div>
              <Coffee weight="fill" />
            </div>
            <h3>O café chega fresquinho até você</h3>
          </BenefitContainer>
        </ItemsContainer>
      </div>
      <img src={coffeeImage} />
    </IntroductionContainer>
  );
}
