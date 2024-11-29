import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RentBike, Home, RouteBike } from "./pages/index";
import Navbar from "./components/Navbar";
import MovingImage from "./components/MovingImage";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="mtnpm run dev
        -5 ml-24">
          <MovingImage />
        </div>
        <Navbar />
        <div className="h-[80vh] overflow-auto" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/renta" element={<RentBike />} />
          <Route path="/ruta" element={<RouteBike />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
