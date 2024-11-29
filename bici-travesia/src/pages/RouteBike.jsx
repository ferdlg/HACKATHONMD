import { CardBar } from "../components/CardBar";
import SelectBar from "../components/SelectBar";

export const RouteBike = () => {
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
    <div className="overflow-auto">
      <h3 className="text-white text-2xl my-5 uppercase">
        ¡Conoce más, descubre más!
      </h3>

      <p className="text-white text-s mb-5 text-left">
        Convierte tu paseo en una experiencia inolvidable con la mejor guía de
        destinos
      </p>

      <div className="ml-5">
        <ul class="list-disc text-left text-sm text-white mb-5 text-[#4AD66D]">
          <li>Elige tu ciudad. 🏙️</li>
          <li>
            Descubre las rutas disponibles y selecciona la que más te guste.
          </li>
        </ul>
      </div>

      <SelectBar
        label="Selecciona tu ciudad"
        options={options}
        onChange={handleSelectionChange}
      />

      <CardBar
        title="Nombre Bici"
        description="Descripcion API"
        ubicacionAddres="Direccion xxxx"
        imageUrl="https://poseidonbogota.com/wp-content/uploads/2023/03/Bicicleta-Fixie-de-pinon-libre-Ontrail-Color-Lite-variacion-1-1.jpg"
        buttonText="Ver Ubicacion"
      />
    </div>
  );
};
