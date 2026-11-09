import { useState } from "react";
import { apiRequest } from "../api";
import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";

const Cart = () => {
  const { cart, total, increase, decrease } = useCart();
  const { token, isDemo } = useUser();
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [checkoutError, setCheckoutError] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setCheckoutMessage("");
    setCheckoutError(false);
    setIsCheckingOut(true);

    try {
      if (!isDemo) {
        await apiRequest("/api/checkouts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cart }),
        });
      }
      setCheckoutMessage("¡Compra realizada con éxito!");
    } catch (error) {
      setCheckoutMessage(error.message);
      setCheckoutError(true);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <main className="cart-page">
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((pizza) => (
              <article className="cart-item" key={pizza.id}>
                <div className="cart-item__image">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      event.currentTarget.nextElementSibling.hidden = false;
                    }}
                  />
                  <span className="cart-item__fallback" aria-hidden="true" hidden>
                    🍕
                  </span>
                </div>
                <div className="cart-item__details">
                  <h2>{pizza.name}</h2>
                  <p className="cart-item__price">
                    ${pizza.price.toLocaleString("es-CL")}
                  </p>
                </div>
                <div className="cart-item__quantity">
                  <span>Cantidad</span>
                  <div className="cart-item__controls">
                    <button type="button" aria-label={`Quitar una ${pizza.name}`} onClick={() => decrease(pizza.id)}>-</button>
                    <span aria-live="polite">{pizza.count}</span>
                    <button type="button" aria-label={`Agregar una ${pizza.name}`} onClick={() => increase(pizza.id)}>+</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <section className="cart-summary" aria-label="Resumen del pedido">
            <div>
              <span>Total</span>
              <strong>${total.toLocaleString("es-CL")}</strong>
            </div>
            <button
              className="cart-checkout"
              type="button"
              disabled={!token || isCheckingOut}
              onClick={handleCheckout}
            >
              {isCheckingOut ? "Procesando..." : "Ir a pagar"}
            </button>
          </section>
          {checkoutMessage && (
            <p
              className="cart-checkout-message"
              role={checkoutError ? "alert" : "status"}
            >
              {checkoutMessage}
            </p>
          )}
        </>
      )}
    </main>
  );
};

export default Cart;