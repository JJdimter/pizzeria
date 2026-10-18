import { useState } from "react";
import { getSamplePizzaImage } from "../pizzaImages";

const CardPizza = ({ pizza, onAddToCart }) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = getSamplePizzaImage(pizza.id);
  };

  return (
    <article className="pizza-card">
      <img
        className="pizza-card__image"
        src={pizza.img}
        alt={pizza.name}
        onError={handleImageError}
      />

      <div className="pizza-card__body">
        <h2 className="pizza-card__title">{pizza.name}</h2>

        <p
          className={`pizza-card__description${descriptionExpanded ? " is-expanded" : ""}`}
          id={`pizza-description-${pizza.id}`}
        >
          {pizza.desc}
        </p>
        <button
          className="pizza-card__more"
          type="button"
          aria-expanded={descriptionExpanded}
          aria-controls={`pizza-description-${pizza.id}`}
          onClick={() => setDescriptionExpanded((expanded) => !expanded)}
        >
          {descriptionExpanded ? "Ver menos" : "Ver más"}
        </button>

        <div className="pizza-card__ingredients">
          <h3>Ingredientes</h3>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="pizza-card__footer">
          <p className="pizza-card__price">${pizza.price.toLocaleString("es-CL")}</p>
          <button
            className="pizza-card__add"
            type="button"
            aria-label={`Añadir ${pizza.name} al carrito`}
            onClick={() => onAddToCart(pizza)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardPizza;