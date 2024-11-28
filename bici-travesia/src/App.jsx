import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RentBike, Home, RouteBike } from './pages/index';
import  Navbar  from './components/Navbar';
function App() {

  return (
    <>
       <BrowserRouter>
        
        <Navbar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renta" element={<RentBike />} />
        <Route path="/ruta" element={<RouteBike/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
