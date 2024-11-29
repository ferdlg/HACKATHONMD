import { useState } from "react";
import { MenuItem, FormControl, Select, InputLabel, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SelectBar = ({ label, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  // Manejar el cambio de selección
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event.target.value); // Llama a la función pasada como prop
    }
  };

  return (
    <Box className="w-full max-w-sm mx-auto mb-10">
      <FormControl
        fullWidth
        className="rounded-lg shadow-md  border border-green-400"
      >
        {/* Etiqueta personalizada */}
        <InputLabel
          className="text-white"
          sx={{
            color: "#FFFFFF", // Color del label cuando no está enfocado
            "&.Mui-focused": {
              color: "#4AD66D", // Color del label cuando está enfocado
            },
            "&:hover": {
              color: "#4AD66D", // Color del label al hacer hover
            },
          }}
        >
          {label}
        </InputLabel>

        {/* Select personalizado */}
        <Select
          value={selectedValue}
          onChange={handleChange}
          label={label}
          IconComponent={ExpandMoreIcon} // Personaliza el ícono de flecha
          className="text-gray-200"
          sx={{
            "& .MuiSelect-select": {
              padding: "12px",
              backgroundColor: "transparent", // Fondo transparente
              color: "#FFFFFF", // Color del texto
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4AD66D", // Borde normal
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4AD66D", // Borde al hacer hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4AD66D", // Borde al estar enfocado
            },
            "& .MuiSvgIcon-root": {
              color: "#4AD66D", // Color de la flecha
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option.value}
              className=" text-gray-300 hover:bg-zinc-600"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#4AD66D !important", // Color al seleccionar
                  color: "#ffffff", // Color del texto seleccionado
                },
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectBar;