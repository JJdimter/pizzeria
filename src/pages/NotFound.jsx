import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="container my-5 text-center">
    <p className="display-1 fw-bold">404</p>
    <h1>Esta página no está en el menú</h1>
    <p className="mb-4">No encontramos lo que buscabas.</p>
    <Link className="btn btn-dark" to="/">Volver al inicio</Link>
  </main>
);

export default NotFound;