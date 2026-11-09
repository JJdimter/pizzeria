import { useUser } from "../hooks/useUser";

const Profile = () => {
  const { logout } = useUser();

  return (
    <main className="container my-5 text-center">
      <h1>Mi perfil</h1>
      <p className="mb-3">usuario@pizzeria.cl</p>
      <button className="btn btn-dark" type="button" onClick={logout}>Cerrar sesión</button>
    </main>
  );
};

export default Profile;