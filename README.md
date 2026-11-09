# Pizzería Mamma Mía

Aplicación web para explorar pizzas y administrar un carrito de compras. El carrito se gestiona globalmente con Context API.

## Requisitos

- Node.js y npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Para conectar con el backend, configura `VITE_API_URL` en `.env.local` (por
ejemplo, `http://localhost:5000`). Si no se configura, en desarrollo se usa
`http://localhost:5000` por defecto.

## Validación

```bash
npm run lint
npm run build
```
