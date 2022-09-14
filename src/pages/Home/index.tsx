import { Introduction } from "./components/Introduction";
import { List } from "./components/List";
import { CoffeeListContainer } from "./styles";

export function Home() {
  return (
    <>
      <Introduction />
      <CoffeeListContainer>
        <h1 className="titleSection">Nossos cafés</h1>
        <List />
      </CoffeeListContainer>
    </>
  );
}
