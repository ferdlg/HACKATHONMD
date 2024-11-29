import { Divider } from "@mui/material";
import React from "react";

const RutasLanding = () => {
  return (
    <div>
        <Divider className="bg-white"/>
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-400 md:text-5xl lg:text-6xl dark:text-white">
        Consulta tus Rutas
      </h1>
      <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        ¡Planea tu próxima aventura con nosotros! Descubre las mejores rutas
        para explorar en bici o a pie. Solo dinos dónde quieres comenzar y qué
        te gustaría visitar, y te daremos el camino ideal para disfrutar al
        máximo. Ya sea un recorrido por los rincones culturales de la ciudad o
        un paseo tranquilo rodeado de naturaleza, aquí encuentras la ruta
        perfecta para ti. ¡Prepárate para moverte sin complicaciones!
      </p>
      <img
      className="rounded-xl"
        src="https://img.freepik.com/vector-premium/mapa-bicicletas-marcadores-inicio-fin-alquiler-bicicletas-servicio-entrega-o-uso-compartido-bicicletas-mapa-ciudad-alfileres-bicicletas-ilustracion-plana-vectorial-tarjeta-volante-banner_625536-612.jpg"
        alt="Ruta"
      />
      <a
        href="/ruta"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 m-4"
      >
        Consultar
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default RutasLanding;
