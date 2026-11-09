import { useCallback, useState } from "react";
import { apiRequest } from "../api";
import { UserContext } from "./UserContext";

const DEMO_EMAIL = "test@example.com";
const DEMO_PASSWORD = "123123";
const DEMO_TOKEN = "demo-token";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [isDemo, setIsDemo] = useState(false);

  const authenticate = useCallback(async (endpoint, credentials) => {
    if (
      endpoint === "login" &&
      credentials.email === DEMO_EMAIL &&
      credentials.password === DEMO_PASSWORD
    ) {
      setToken(DEMO_TOKEN);
      setEmail(DEMO_EMAIL);
      setIsDemo(true);
      return;
    }

    const data = await apiRequest(`/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!data?.token) {
      throw new Error("La respuesta del servidor no incluye un token de acceso");
    }

    setToken(data.token);
    setEmail(data.email || credentials.email);
    setIsDemo(false);
  }, []);

  const login = useCallback(
    (credentials) => authenticate("login", credentials),
    [authenticate]
  );

  const register = useCallback(
    (credentials) => authenticate("register", credentials),
    [authenticate]
  );

  const logout = useCallback(() => {
    setToken(null);
    setEmail("");
    setIsDemo(false);
  }, []);

  const getProfile = useCallback(async () => {
    if (!token) {
      throw new Error("Debes iniciar sesión para ver tu perfil");
    }

    if (isDemo) {
      return email;
    }

    const data = await apiRequest("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const profileEmail = data?.email || data?.user?.email;

    if (!profileEmail) {
      throw new Error("La respuesta del servidor no incluye el email del perfil");
    }

    setEmail(profileEmail);
    return profileEmail;
  }, [email, isDemo, token]);

  return (
    <UserContext.Provider value={{ token, email, isDemo, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
