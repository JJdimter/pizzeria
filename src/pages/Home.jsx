import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";
import CardPizza from "../components/Cardpizza";
import Header from "../components/Header";
import { useCart } from "../hooks/useCart";
import { pizzas as localPizzas } from "../pizzas";

const Home = () => {
  const { addToCart } = useCart();
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/pizzas`);
        if (!res.ok) {
          throw new Error("No se pudieron cargar las pizzas");
        }
        setPizzas(await res.json());
      } catch {
        setPizzas(localPizzas);
      } finally {
        setLoading(false);
      }
    };

    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="container my-4">
        {loading && <p className="text-center">Cargando pizzas...</p>}
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza pizza={pizza} onAddToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;