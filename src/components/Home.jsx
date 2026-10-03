import Header from "./Header";
import CardPizza from "./Cardpizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <div>
      <h1>¡Pizzería Mamma Mía!</h1>

      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
};

export default Home;