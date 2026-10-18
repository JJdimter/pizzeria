import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";
import Header from "./Header";
import CardPizza from "./Cardpizza";

const Home = () => {
  // Estado donde guardamos las pizzas que devuelve la API
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/pizzas`);
        if (!res.ok) {
          throw new Error("No se pudieron cargar las pizzas");
        }
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPizzas();
  }, []); // [] => se ejecuta una sola vez, al montar el componente

  return (
    <>
      <Header />
      <div className="container my-4">
        {loading && <p className="text-center">Cargando pizzas...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza
                pizza={pizza}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;