import { useState } from "react";
import { Introduction } from "./components/Introduction";
import { List } from "./components/List";
import {
  CoffeeListContainer,
  FilterContainer,
  HeaderContainer,
} from "./styles";

export function Home() {
  const [filterCoffee, setFilterCoffee] = useState<
    "ALL" | "TRADICIONAL" | "ESPECIAL" | "COM LEITE" | "ALCOÓLICO" | "GELADO"
  >("ALL");

  return (
    <>
      <Introduction />
      <CoffeeListContainer>
        <HeaderContainer>
          <h1>Nossos cafés</h1>
          <FilterContainer>
            <button onClick={() => setFilterCoffee("TRADICIONAL")}>
              TRADICIONAL
            </button>
            <button onClick={() => setFilterCoffee("ESPECIAL")}>
              ESPECIAL
            </button>
            <button onClick={() => setFilterCoffee("COM LEITE")}>
              COM LEITE
            </button>
            <button onClick={() => setFilterCoffee("ALCOÓLICO")}>
              ACOÓLICO
            </button>
            <button onClick={() => setFilterCoffee("GELADO")}>GELADO</button>
          </FilterContainer>
        </HeaderContainer>
        <List filter={filterCoffee} />
      </CoffeeListContainer>
    </>
  );
}
