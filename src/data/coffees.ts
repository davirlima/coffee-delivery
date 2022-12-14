import tradicional from "../assets/KindsOfCoffees/tradicional.png";
import americano from "../assets/KindsOfCoffees/americano.png";
import cremoso from "../assets/KindsOfCoffees/cremoso.png";
import gelado from "../assets/KindsOfCoffees/gelado.png";
import comLeite from "../assets/KindsOfCoffees/comLeite.png";
import latte from "../assets/KindsOfCoffees/latte.png";
import capuccino from "../assets/KindsOfCoffees/capuccino.png";
import macchiato from "../assets/KindsOfCoffees/macchiato.png";
import mocaccino from "../assets/KindsOfCoffees/mocaccino.png";
import chocolateQuente from "../assets/KindsOfCoffees/chocolateQuente.png";
import cubano from "../assets/KindsOfCoffees/cubano.png";
import havaiano from "../assets/KindsOfCoffees/havaiano.png";
import arabe from "../assets/KindsOfCoffees/arabe.png";
import irlandes from "../assets/KindsOfCoffees/irlandes.png";

import { v4 as uuidv4 } from "uuid";

export interface CoffeesProps {
  id: string;
  image: string;
  name: string;
  description: string;
  value: string;
  kind: string[];
}

export const coffees: CoffeesProps[] = [
  {
    id: uuidv4(),
    image: tradicional,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: "9,90",
    kind: ["TRADICIONAL"],
  },
  {
    id: uuidv4(),
    image: americano,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: "9,90",
    kind: ["TRADICIONAL"],
  },
  {
    id: uuidv4(),
    image: cremoso,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    value: "9,90",
    kind: ["TRADICIONAL"],
  },
  {
    id: uuidv4(),
    image: gelado,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: "9,90",
    kind: ["TRADICIONAL", "GELADO"],
  },
  {
    id: uuidv4(),
    image: comLeite,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: "9,90",
    kind: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: uuidv4(),
    image: latte,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: "9,90",
    kind: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: uuidv4(),
    image: capuccino,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: "9,90",
    kind: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: uuidv4(),
    image: macchiato,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    value: "9,90",
    kind: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: uuidv4(),
    image: mocaccino,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: "9,90",
    kind: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: uuidv4(),
    image: chocolateQuente,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: "9,90",
    kind: ["ESPECIAL", "COM LEITE"],
  },
  {
    id: uuidv4(),
    image: cubano,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: "9,90",
    kind: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
  },
  {
    id: uuidv4(),
    image: havaiano,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    value: "9,90",
    kind: ["ESPECIAL"],
  },
  {
    id: uuidv4(),
    image: arabe,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: "9,90",
    kind: ["ESPECIAL"],
  },
  {
    id: uuidv4(),
    image: irlandes,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: "9,90",
    kind: ["ESPECIAL", "ALCOÓLICO"],
  },
];
