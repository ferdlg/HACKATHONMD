import { useEffect, useState } from "react";
import { CardBar } from "../components/CardBar";
import SelectBar from "../components/SelectBar";
import { CityBikersServices } from '../api/bikeServices/services/bikeServices';

export const RentBike = () => {
  const [biker, setBiker] = useState([]); // Initialize as an empty array
  const [bikerCountry, setBikerCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const bikeService = CityBikersServices();

  console.log('Biker',biker)
  // Fetch bikers from API
  const fetchBikers = async () => {
    try {
      // Check if the response is an array
      const response = await bikeService.getAll();
      setBiker(response.networks);
      

      // Assuming 'CO' stands for Colombia, we fetch bikes from that country.
      const responseCountry = await bikeService.getByCountry('CO');
      if (Array.isArray(responseCountry)) {
        setBikerCountry(responseCountry);
      } else {
        console.error('Expected an array from getByCountry(), but received:', responseCountry);
      }

    } catch (e) {
      console.error("Error fetching bike data:", e);
    }
  };

  useEffect(() => {
    fetchBikers();
  }, []);

  // Check if biker is an array before using map
  const countries = Array.isArray(biker) ? [...new Set(biker.map(biker => biker.location.country))] : [];

  // Filter cities based on selected country
  const cities = Array.isArray(bikerCountry)
    ? bikerCountry.filter(biker => biker.location.country === selectedCountry).map(biker => ({
        value: biker.location.city,
        label: biker.location.city
      }))
    : [];

  // Handle selection changes for country and city
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setSelectedCity(""); // Reset city when country changes
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  // Filter bikes based on selected city and country
  const filteredBikes = Array.isArray(biker)
    ? biker.filter(biker => biker.location.country === selectedCountry && biker.location.city === selectedCity)
    : [];

  return (
    <div className="overflow-auto">
      <h3 className="text-xl mt-5 font-extrabold  text-[#4AD66D] leading-none mb-3 uppercase tracking-wide">
        ¡Explora a tu ritmo!
      </h3>

      <p className="text-white mb-5 text-left">
        Con nuestra app, encontrar la ruta ideal es tan fácil como dar un par de
        toques en tu pantalla
      </p>

      <div className="ml-5">
        <ul className="list-disc text-left text-sm text-white mb-5 text-[#4AD66D]">
          <li>Selecciona tu país. 🌍</li>
          <li>Elige tu ciudad. 🏙️</li>
          <li>
            Encuentra los lugares turísticos más cercanos y planifica tu recorrido.
          </li>
        </ul>
      </div>

      <SelectBar
        label="Selecciona el País"
        options={countries.map(country => ({ value: country, label: country }))}
        onChange={handleCountryChange}
      />

      {selectedCountry && (
        <SelectBar
          label="Selecciona la Ciudad"
          options={cities}
          onChange={handleCityChange}
        />
      )}
      <div className="gap-2">
        {
          biker.map((bike)=>{
            return(
              <div key={bike.id} className="bg-white mt-2 py-2 rounded-sm">
              💚 - {bike.name} - {bike.location.city}
              </div>
            )
          })
        }

      </div>
    </div>
  );
};
