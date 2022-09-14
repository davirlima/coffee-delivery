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
            <button
              onClick={() =>
                filterCoffee === "ALL"
                  ? setFilterCoffee("TRADICIONAL")
                  : setFilterCoffee("ALL")
              }
              className={filterCoffee === "TRADICIONAL" ? "active" : ""}
            >
              TRADICIONAL
            </button>
            <button
              onClick={() =>
                filterCoffee === "ALL"
                  ? setFilterCoffee("ESPECIAL")
                  : setFilterCoffee("ALL")
              }
              className={filterCoffee === "ESPECIAL" ? "active" : ""}
            >
              ESPECIAL
            </button>
            <button
              onClick={() =>
                filterCoffee === "ALL"
                  ? setFilterCoffee("COM LEITE")
                  : setFilterCoffee("ALL")
              }
              className={filterCoffee === "COM LEITE" ? "active" : ""}
            >
              COM LEITE
            </button>
            <button
              onClick={() =>
                filterCoffee === "ALL"
                  ? setFilterCoffee("ALCOÓLICO")
                  : setFilterCoffee("ALL")
              }
              className={filterCoffee === "ALCOÓLICO" ? "active" : ""}
            >
              ACOÓLICO
            </button>
            <button
              onClick={() =>
                filterCoffee === "ALL"
                  ? setFilterCoffee("GELADO")
                  : setFilterCoffee("ALL")
              }
              className={filterCoffee === "GELADO" ? "active" : ""}
            >
              GELADO
            </button>
          </FilterContainer>
        </HeaderContainer>
        <List filter={filterCoffee} />
      </CoffeeListContainer>
    </>
  );
}
