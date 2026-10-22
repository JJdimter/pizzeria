import { getSamplePizzaImage } from "../pizzaImages";

const Header = () => {
  return (
    <header
      className="hero"
      style={{ "--hero-image": `url("${getSamplePizzaImage("p004")}")` }}
    >
      <div className="hero__panel">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr className="hero__rule" />
      </div>
    </header>
  );
};

export default Header;