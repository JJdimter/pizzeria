import { useState } from "react";
import { pizzaCart } from "../pizzas";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() =>
    pizzaCart.map((pizza) => ({ ...pizza, id: pizza.id.toLowerCase() }))
  );

  const addToCart = (pizza) => {
    const id = pizza.id.toLowerCase();

    setCart((items) => {
      const alreadyAdded = items.some((item) => item.id === id);

      if (alreadyAdded) {
        return items.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...items, { ...pizza, id, count: 1 }];
    });
  };

  const increase = (id) => {
    setCart((items) =>
      items.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart((items) =>
      items
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );

  return (
    <CartContext.Provider value={{ cart, total, addToCart, increase, decrease }}>
      {children}
    </CartContext.Provider>
  );
};