/* eslint-disable react/prop-types */
export const WeatherIcon = ({ clima }) => {
  const getIconClass = () => {
    if (clima) {
        if (clima.includes("clear")) {
            return "src/assets/soleado.png"; // Soleado
          } else if (clima.includes("clouds")) {
            return "src/assets/nubes.png"; // Nublado
          } else if (clima.includes("rain")) {
            return "src/assets/lluvia.png"; // Lluvioso
          } else if (clima.includes("snow")) {
            return "src/assets/nieve.png"; // Nevado
          } else {
            return "src/assets/tormenta.png"; // Otro
          }
    }
    
  };

  return (
    <div>
      <img src={getIconClass()} alt="Icono de cosa" className="iconos" />
    </div>
  );
};
