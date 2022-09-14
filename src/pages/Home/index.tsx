import { Introduction } from "./components/Introduction";
import { List } from "./components/List";
import {
  CoffeeListContainer,
  FilterContainer,
  HeaderContainer,
} from "./styles";

export function Home() {
  return (
    <>
      <Introduction />
      <CoffeeListContainer>
        <HeaderContainer>
          <h1>Nossos cafés</h1>
          <FilterContainer>
            <button>TRADICIONAL</button>
            <button>ESPECIAL</button>
            <button>COM LEITE</button>
            <button>ACOÓLICO</button>
            <button>GELADO</button>
          </FilterContainer>
        </HeaderContainer>
        <List />
      </CoffeeListContainer>
    </>
  );
}
