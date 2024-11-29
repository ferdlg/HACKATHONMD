import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Modal,
  Box,
  IconButton,
  CardActionArea,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

// Estilo personalizado del Modal utilizando Material UI y Tailwind
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Adaptativo al ancho de la pantalla
  maxWidth: "400px", // Ancho máximo para pantallas grandes
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export const CardBar = ({ title, description, imageUrl, buttonText, ubicacionAddres }) => {
  // Estado para controlar la apertura del modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* Tarjeta principal */}
      <Card className="max-w-sm w-full shadow-lg rounded-lg overflow-hidden transform transition-transform my-6">
        <CardActionArea>
          {/* Imagen de la tarjeta */}
          <div className="relative w-full h-48 md:h-60 lg:h-64">
            <CardMedia
              component="img"
              image={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido de la tarjeta */}
          <CardContent className="p-4">
            <Typography
              variant="h5"
              component="div"
              className="font-bold text-gray-800"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="mt-2 text-gray-600"
            >
              {description}
            </Typography>

            {/* Botón para abrir el modal */}
            <div className="mt-4">
              <Button
                variant="contained"
                fullWidth
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#4CAF50", // Color verde
                  "&:hover": {
                    backgroundColor: "#388E3C", // Color verde oscuro al hacer hover
                  },
                }}
                className="text-white"
              >
                {buttonText}
              </Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {/* Botón de cierre */}
          <IconButton
            onClick={handleClose}
            className="absolute -top-5 right-0 left-64 text-gray-600 hover:text-gray-800"
          >
            <CloseIcon />
          </IconButton>

          {/* Contenido del modal */}

          
          <Typography sx={{ mt: 2 }} className="text-gray-600">
            ENCUENTRANOS EN 
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            className="text-gray-800 font-bold"
          >
            Ubicacion {ubicacionAddres}
          </Typography>


          <div>
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63460.255352331544!2d-75.62070419097468!3d6.228624729184868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stiendas%20de%20ciclas!5e0!3m2!1ses!2sco!4v1732826335418!5m2!1ses!2sco"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </Box>
      </Modal>
    </>
  );
};
