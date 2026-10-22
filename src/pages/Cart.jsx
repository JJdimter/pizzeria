import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cart, total, increase, decrease } = useCart();

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
            <button className="cart-checkout" type="button">Ir a pagar</button>
          </section>
        </>
      )}
    </main>
  );
};

export default Cart;