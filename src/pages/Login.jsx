import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    setMessage("");
    setIsSubmitting(true);
    try {
      await login({ email, password });
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container my-5">
      <h1>Iniciar sesión</h1>
      <form className="mx-auto d-grid gap-3" style={{ maxWidth: "420px" }} onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn btn-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </form>
      <p className="text-center mt-3">
        Acceso de prueba: <strong>test@example.com</strong> / <strong>123123</strong>
      </p>
      {message && <p className="text-center mt-3" role="alert">{message}</p>}
    </main>
  );
};

export default Login;