const Header = () => {
  return (
    <header
      className="text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co/m/o/pizzeria%2FHeader.jpg?alt=media&token=a8385311-6be7-4a0e-940a-526488d55c3c")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "220px",
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p className="mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 border-white mt-3" />
    </header>
  );
};

export default Header;