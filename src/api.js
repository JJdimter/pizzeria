export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "");

export const apiRequest = async (path, options) => {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  const responseText = await response.text();
  let data = null;

  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { message: responseText };
    }
  }

  if (!response.ok) {
    const message =
      data?.message || data?.error || `La solicitud falló (${response.status})`;
    throw new Error(message);
  }

  return data;
};