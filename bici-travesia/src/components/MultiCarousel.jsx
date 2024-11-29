import { Button } from "@mui/material";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const carouselRef = useRef(null);
  const images = [
    "/mujeres.jpeg",
    "/carrusel_1.jpeg",
    "/carrusel_2.jpeg",
    "/carrusel_3.jpeg",
    "/carrusel_4.jpeg",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-2 mt-5 md:px-10 mb-20">
      <Carousel
        ref={carouselRef} // Asignar la referencia al carrusel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        showDots={false}
        arrows={true}
      >
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex-colum">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-48 md:h-[500px] rounded-xl shadow-md"
              />
              <p className="my-2 text-white">¡Anímate a disfrutar del camino!</p>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#4CAF50", // Color verde
                  "&:hover": {
                    backgroundColor: "#388E3C", // Color verde oscuro al hacer hover
                  },
                }}
                className="text-white"
              >
                Unirte
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
