import MultiCarousel from "./MultiCarousel";

export const SectionWomen = () => {
  return (
    <div className="overflow-auto ">
      <h3 className=" text-2xl mt-5 font-extrabold  text-green-400 leading-none uppercase tracking-wide mb-8">
        ¡Anímate a pedalear!
      </h3>
      <p className="text-white mb-5 text-left">
        La bicicleta es una forma divertida y saludable de moverse, disfrutar
        del aire libre y sentirte libre. No importa tu experiencia, lo
        importante es dar el primer paso. <span className="text-green-400" >¡Únete a la comunidad de mujeres que
        se atreven a rodar y descubre lo fácil que es incluir la bici en tu día
        a día!</span>
      </p>
      <MultiCarousel />
    </div>
  );
};
