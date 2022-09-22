import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "./components/CoffeeCard";
import { ListContainer } from "./styles";

interface ListProps {
  filter:
    | "ALL"
    | "TRADICIONAL"
    | "ESPECIAL"
    | "COM LEITE"
    | "ALCOÓLICO"
    | "GELADO";
}

export function List({ filter }: ListProps) {
  return (
    <ListContainer>
      {filter === "ALL"
        ? coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                image={coffee.image}
                name={coffee.name}
                description={coffee.description}
                value={coffee.value}
                kind={coffee.kind}
                id={coffee.id}
              />
            );
          })
        : coffees.map((coffee) => {
            if (coffee.kind.find((kind) => kind === filter) !== undefined) {
              return (
                <CoffeeCard
                  id={coffee.id}
                  key={coffee.id}
                  image={coffee.image}
                  name={coffee.name}
                  description={coffee.description}
                  value={coffee.value}
                  kind={coffee.kind}
                />
              );
            }
          })}
    </ListContainer>
  );
}
