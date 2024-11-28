import * as React from "react";

export const RentBike = () => {
  return (
    <div>
      <h3 className="text-white">Aquí puedes encontrar las tiendas que tienen bicicletas disponibles para ti</h3>
      <iframe className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63460.255352331544!2d-75.62070419097468!3d6.228624729184868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stiendas%20de%20ciclas!5e0!3m2!1ses!2sco!4v1732826335418!5m2!1ses!2sco"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
