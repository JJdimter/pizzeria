import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <div className="site-nav__inner">
        <Link className="site-nav__brand" to="/" aria-label="Pizzería Mamma Mia, inicio">
          <span className="site-nav__mark" aria-hidden="true">🍕</span>
          <span className="site-nav__brand-copy">
            <strong>Pizzería</strong>
            <small>Mamma Mia!</small>
          </span>
        </Link>
        <div className="site-nav__links">
          <NavLink className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`} to="/" end>Inicio</NavLink>
          <NavLink className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`} to="/profile">Perfil</NavLink>
          <NavLink className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`} to="/login">Ingresar</NavLink>
          <NavLink className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`} to="/register">Crear cuenta</NavLink>
        </div>
        <Link className="site-nav__cart" to="/cart">
          <span><span aria-hidden="true">🛒</span> Carrito</span>
          <strong>${total.toLocaleString("es-CL")}</strong>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;