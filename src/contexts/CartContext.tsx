import { createContext, ReactNode, useState } from "react";
import { CoffeesProps } from "../data/coffees";
import { produce } from "immer";

interface CartCoffeeProps extends CoffeesProps {
  quantity: number;
}

interface CartContextProps {
  cartCoffee: CartCoffeeProps[];
  addCoffeeInCart: (coffee: CoffeesProps) => void;
  changeCoffeeCartQuantity: (coffeeId: string, isAdd: boolean) => void;
  verifyIfCoffeeAlreadyStayOnCart: (coffeeId: string) => boolean;
  removeCoffeeFromCart: (coffeeId: string) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffee, setCartCoffee] = useState<CartCoffeeProps[]>([]);

  function verifyIfCoffeeAlreadyStayOnCart(coffeeId: string) {
    const verificator = cartCoffee.findIndex(
      (coffeeTest) => coffeeTest.id === coffeeId
    );
    return verificator != -1 ? true : false;
  }

  function addCoffeeInCart(coffee: CoffeesProps) {
    if (!verifyIfCoffeeAlreadyStayOnCart(coffee.id)) {
      const coffeeWithQuantity = {
        ...coffee,
        quantity: 1,
      };

      const newCartCoffee = produce(cartCoffee, (draft) => {
        draft.push(coffeeWithQuantity);
      });
      setCartCoffee(newCartCoffee);
      console.log(cartCoffee);
    }
  }

  function changeCoffeeCartQuantity(coffeeId: string, isAdd: boolean) {
    if (verifyIfCoffeeAlreadyStayOnCart(coffeeId)) {
      const newCartCoffee = produce(cartCoffee, (draft) => {
        const position = cartCoffee.findIndex(
          (coffee) => coffee.id === coffeeId
        );
        isAdd
          ? (draft[position].quantity += 1)
          : (draft[position].quantity -= 1);
      });
      setCartCoffee(newCartCoffee);
      console.log(cartCoffee);
    }
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const position = cartCoffee.findIndex((coffee) => coffee.id === coffeeId);
    const newCartCoffee = produce(cartCoffee, (draft) => {
      draft.splice(position, 1);
    });
    setCartCoffee(newCartCoffee);
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffee,
        addCoffeeInCart,
        changeCoffeeCartQuantity,
        verifyIfCoffeeAlreadyStayOnCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
