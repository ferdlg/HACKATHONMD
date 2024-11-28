import { useEffect } from 'react';
import './App.css'
import { useState } from 'react'
import { CityBikersServices } from './api/bikeServices/services/bikeServices';

function App() {

  const [biker, setBiker] = useState([]);
  const [bikerCountry, setBikerCountry]= useState([]);
  const bikeService = CityBikersServices();
  
  console.log('biker:', biker);
  console.log('bikerByCountry:', bikerCountry);
  
  const fetchBikers = async () => {
    try {
      const response =  await bikeService.getAll();
      const responseCountry = await bikeService.getByCountry('CO');

      setBiker(response);
      setBikerCountry(responseCountry);

    } catch (e) {
      throw new Error(e);
    }
  }
  useEffect(() => {
    fetchBikers();
  }, []);
  return (
    <>


    </>
  )
}

export default App
