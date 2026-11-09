import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

const Profile = () => {
  const { email, getProfile, logout } = useUser();
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    getProfile().catch((requestError) => {
      if (isActive) {
        setError(requestError.message);
      }
    });

    return () => {
      isActive = false;
    };
  }, [getProfile]);

  return (
    <main className="container my-5 text-center">
      <h1>Mi perfil</h1>
      {error ? (
        <p className="mb-3" role="alert">{error}</p>
      ) : (
        <p className="mb-3">{email || "Cargando perfil..."}</p>
      )}
      <button className="btn btn-dark" type="button" onClick={logout}>Cerrar sesión</button>
    </main>
  );
};

export default Profile;