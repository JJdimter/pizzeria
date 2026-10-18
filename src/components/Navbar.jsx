import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand text-decoration-none" to="/">
        Pizzería Mamma Mia!
      </Link>
      <div className="d-flex gap-2 me-auto">
        <Link className="btn btn-outline-light btn-sm" to="/">🍕 Home</Link>
        <Link className="btn btn-outline-light btn-sm" to="/profile">👤 Profile</Link>
        <Link className="btn btn-outline-light btn-sm" to="/login">🔐 Login</Link>
        <Link className="btn btn-outline-light btn-sm" to="/register">📝 Register</Link>
      </div>
      <Link className="btn btn-outline-info btn-sm" to="/cart">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
};

export default Navbar;