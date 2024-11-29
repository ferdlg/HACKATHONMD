const MovingImage = () => {
  return (
    <div className="relative w-full h-64">
      {/* Imagen inferior fija */}
      <img
        src="./public/Logo Tipografico.svg"
        alt="Imagen inferior"
        className="w-36 h-auto object-cover"
      />

      {/* Imagen superior que se mueve */}
      <img
        src="./public/Logo Ubicacion.svg"
        alt="Imagen superior"
        className="absolute top-0 left-0 w-36 h-auto  object-cover animate-moverVehiculo -mt-8"
      />
    </div>
  );
};

export default MovingImage;
