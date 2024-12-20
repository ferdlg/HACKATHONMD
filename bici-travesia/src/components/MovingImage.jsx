const MovingImage = () => {
  return (
    <div className="relative w-full h-6 my-5">
      {/* Imagen inferior fija */}
      <img
        src="/Logo Tipografico.svg"
        alt="Imagen inferior"
        className="w-36 h-auto object-cover"
      />

      {/* Imagen superior que se mueve */}
      <img
        src="/Logo Ubicacion.svg"
        alt="Imagen superior"
        className="absolute top-0 left-0 w-36 h-auto  object-cover animate-moverVehiculo -mt-8"
      />
    </div>
  );
};

export default MovingImage;
