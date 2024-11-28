import { useEffect, useState } from "react";
import { TouristicAttractionService } from "./api/touristicServices/tourusticServices";
import "./App.css";
import EjemploMapa from "./components/EjemploMapa";

function App() {
  const [atractions, setAtractions] = useState([]);
  const [atractionsByCityName, setAtractionsByCityName] = useState([]);

  const touristicAttractionService = TouristicAttractionService();

  const fetchAtractions = async () => {
    try {
      const response = await touristicAttractionService.getAll();
      setAtractions(response);
    } catch (error) {
      console.error("Error fetching atractions:", error);
    }
  };

  const fetchAtractionsByCityName = async ( name ) => {
    try {
      const response = await touristicAttractionService.getByCityName(name);
      setAtractionsByCityName(response);
    } catch (error) {
      console.error("Error fetching atractions:", error);
    }
  };

  useEffect(() => {
    fetchAtractions();
    fetchAtractionsByCityName("Bogotá")
  }, []);

  if(atractions && atractionsByCityName){
    console.log(atractions)
    console.log(atractionsByCityName)
  }

  return (
    <EjemploMapa/>
  )
}

export default App;
