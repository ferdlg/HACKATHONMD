import { NavLink } from "react-router-dom";


const Navbar = () => {
  

  return (
    <nav className="menu-nav">
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/renta"}
      >
       Renta
      </NavLink>
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/"}
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/ruta"}
      >
        Ruta
      </NavLink>
    </nav>
  );
};

export default Navbar;