import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setMessage("¡Login exitoso!");
  };

  return (
    <main className="container my-5">
      <h1>Iniciar sesión</h1>
      <form className="mx-auto d-grid gap-3" style={{ maxWidth: "420px" }} onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn btn-dark" type="submit">Iniciar sesión</button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </main>
  );
};

export default Login;