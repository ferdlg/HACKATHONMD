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
    <div className="overflow-auto">
      <h3 className="text-white text-2xl my-5 uppercase">
        ¡Explora a tu ritmo!
      </h3>

      <p className="text-white text-s mb-5 text-left">
        Con nuestra app, encontrar la ruta ideal es tan fácil como dar un par de
        toques en tu pantalla
      </p>

      <div className="ml-5">
        <ul class="list-disc text-left text-sm text-white mb-5 text-[#4AD66D]">
          <li>Selecciona tu país. 🌍</li>
          <li>Elige tu ciudad. 🏙️</li>
          <li>
          Encuentra los lugares turísticos más cercanos y planifica tu recorrido.
          </li>
        </ul>
      </div>

      <SelectBar
        label="Selecciona el Pais"
        options={options}
        onChange={handleSelectionChange}
      />

      <CardBar
        title="Bicicleta XR333"
        description="Descripcion API"
        ubicacionAddres="Direccion xxxx"
        imageUrl="https://poseidonbogota.com/wp-content/uploads/2023/03/Bicicleta-Fixie-de-pinon-libre-Ontrail-Color-Lite-variacion-1-1.jpg"
        buttonText="Alquilar"
      />
    </div>
  );
};
