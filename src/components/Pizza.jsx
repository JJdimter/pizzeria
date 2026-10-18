import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";
import { getSamplePizzaImage } from "../pizzaImages";

const Pizza = () => {
  // Una sola pizza, por eso el estado parte en null (no en [])
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        // El id es fijo por ahora (p001); en el siguiente hito será dinámico
        const res = await fetch(`${API_BASE_URL}/api/pizzas/p001`);
        if (!res.ok) {
          throw new Error("No se pudo cargar la pizza");
        }
        const data = await res.json();
        setPizza(data);
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
    <div className="container my-5">
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
              <li key={ingredient} className="text-capitalize">
                🍕 {ingredient}
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4 className="m-0">Precio: ${pizza.price.toLocaleString("es-CL")}</h4>
            {/* Por ahora sin funcionalidad, según el enunciado */}
            <button type="button" className="btn btn-dark">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;