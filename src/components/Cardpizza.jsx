const CardPizza = ({ pizza }) => {
  return (
     <div className="card">
      <img src={pizza.img} alt={pizza.name} />

      <div className="card-body">
        <h2>{pizza.name}</h2>

        <p>{pizza.desc}</p>

        <h3>${pizza.price.toLocaleString("es-CL")}</h3>

        <h4>Ingredientes:</h4>

        <ul>
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;