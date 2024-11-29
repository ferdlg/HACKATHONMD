/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  colors: {
    Blue: "#03045E",
    Green: "#4AD66D",
    white: "FFFFFF",
  },
  theme: {
    extend: {
      animation: {
        moverVehiculo: "moverVehiculo 10s ease-in-out infinite", // Animación personalizada
      },
      keyframes: {
        moverVehiculo: {
          "0%": { transform: "translateX(-100%)" }, // Inicia fuera de la pantalla a la izquierda
          "50%": { transform: "translateX(0%)" }, // Se detiene en el centro
          "100%": { transform: "translateX(100%)" }, // Termina fuera de la pantalla a la derecha
        },
      },
    },
  },
  plugins: [],
};
