import * as React from "react";
import { CardBar } from "../components/CardBar";
import SelectBar from "../components/SelectBar";

export const RentBike = () => {
  // Opciones para el select
  const options = [
    { value: "option1", label: "Opción 1" },
    { value: "option2", label: "Opción 2" },
    { value: "option3", label: "Opción 3" },
  ];

  // Manejar el valor seleccionado
  const handleSelectionChange = (value) => {
    console.log("Opción seleccionada:", value);
  };

  return (
    <div>
      <h3 className="text-white text-2xl my-5 uppercase">
        ¡Explora a tu ritmo!
      </h3>

      <p className="text-white text-s mb-5">
        Con nuestra app, encontrar la ruta ideal es tan fácil como dar un par de
        toques en tu pantalla
      </p>

      <div className="ml-5">
        <ul class="list-disc text-left text-white mb-5">
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>
      </div>

      <SelectBar
        label="Selecciona el Pais"
        options={options}
        onChange={handleSelectionChange}
      />

      <CardBar
        title="Nombre Bici"
        description="Descripcion API"
        ubicacionAddres="Direccion xxxx"
        imageUrl="https://poseidonbogota.com/wp-content/uploads/2023/03/Bicicleta-Fixie-de-pinon-libre-Ontrail-Color-Lite-variacion-1-1.jpg"
        buttonText="Alquilar"
      />
    </div>
  );
};
