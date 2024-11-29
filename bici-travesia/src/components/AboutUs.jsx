import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="text-wrap ">
      <h1 className=" uppercase mt-4 mb-4 text-xl font-extrabold leading-none tracking-wide text-green-400 md:text-5xl lg:text-6xl dark:text-white">
        Quienes somos
      </h1>
      <div className="text-white text-left" data-aos="fade-up">
        Somos la app perfecta para tus aventuras. Aquí encuentras toda la info
        que necesitas sobre renta de bicis y los mejores lugares turísticos.
        ¿Quieres recorrer la ciudad o perderte en un camino lleno de paisajes?
        Nosotros te damos las rutas para que disfrutes cada pedaleada al máximo.
        preocupaciones.
      </div>
    </div>
  );
};

export default AboutUs;
