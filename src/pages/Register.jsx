import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const Register = () => {
  const { register } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    setMessage("");
    setIsSubmitting(true);
    try {
      await register({ email, password });
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container my-5">
      <h1>Registro</h1>
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
          minLength={6}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Confirmar contraseña"
          minLength={6}
          required
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button className="btn btn-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>
      {message && <p className="text-center mt-3" role="alert">{message}</p>}
    </main>
  );
};

export default Register;