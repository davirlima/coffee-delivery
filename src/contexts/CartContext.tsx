import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeesProps } from "../data/coffees";
import { produce } from "immer";
import { AddressFormData } from "../pages/Cart";

export interface CartCoffeeProps extends CoffeesProps {
  quantity: number;
}

interface OrderProps extends AddressFormData {
  coffees: CartCoffeeProps[];
}

interface CartContextProps {
  cartCoffee: CartCoffeeProps[];
  order: OrderProps[];
  totalCoffeesOnCart: number;
  addCoffeeInCart: (coffee: CoffeesProps) => void;
  changeCoffeeCartQuantity: (coffeeId: string, isAdd: boolean) => void;
  verifyIfCoffeeAlreadyStayOnCart: (coffeeId: string) => boolean;
  removeCoffeeFromCart: (coffeeId: string) => void;
  createAnOrder: (clientInformations: AddressFormData) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffee, setCartCoffee] = useState<CartCoffeeProps[]>([]);
  const [order, setOrder] = useState<OrderProps[]>([]);

  useEffect(() => {
    const getCoffeeOnStorage = localStorage.getItem("coffee");
    if (getCoffeeOnStorage) {
      setCartCoffee(JSON.parse(getCoffeeOnStorage));
    }
  }, []);

  useEffect(() => {
    if (cartCoffee.length > 0) {
      localStorage.setItem("coffee", JSON.stringify(cartCoffee));
    }
  }, [cartCoffee]);

  const totalCoffeesOnCart = cartCoffee.length;

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
    }
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const position = cartCoffee.findIndex((coffee) => coffee.id === coffeeId);
    const newCartCoffee = produce(cartCoffee, (draft) => {
      draft.splice(position, 1);
    });
    setCartCoffee(newCartCoffee);
  }

  function createAnOrder(clientInformations: AddressFormData) {
    const orderWithCoffees: OrderProps = {
      ...clientInformations,
      coffees: cartCoffee,
    };
    const newOrder = produce(order, (draft) => {
      draft.push(orderWithCoffees);
    });
    setOrder(newOrder);
    setCartCoffee([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffee,
        addCoffeeInCart,
        changeCoffeeCartQuantity,
        verifyIfCoffeeAlreadyStayOnCart,
        removeCoffeeFromCart,
        totalCoffeesOnCart,
        createAnOrder,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
