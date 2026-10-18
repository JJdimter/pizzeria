import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";
import { useCart } from "../hooks/useCart";
import { getSamplePizzaImage } from "../pizzaImages";

const Pizza = () => {
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/pizzas/p001`);
        if (!res.ok) {
          throw new Error("No se pudo cargar la pizza");
        }
        setPizza(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, []);

  if (loading) return <p className="text-center my-5">Cargando pizza...</p>;
  if (error) return <p className="text-center my-5 text-danger">{error}</p>;
  if (!pizza) return null;

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = getSamplePizzaImage(pizza.id);
  };

  return (
    <main className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: "700px" }}>
        <img
          src={pizza.img}
          className="card-img-top"
          alt={pizza.name}
          onError={handleImageError}
          style={{ height: "360px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className="card-title text-capitalize">Pizza {pizza.name}</h2>
          <p className="card-text">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient} className="text-capitalize">🍕 {ingredient}</li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4 className="m-0">Precio: ${pizza.price.toLocaleString("es-CL")}</h4>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => addToCart(pizza)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;