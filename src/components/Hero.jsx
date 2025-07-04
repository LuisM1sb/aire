import React from 'react';
import heroVideo from '../assets/hero-video.mp4';

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full h-[500px] overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa azul traslúcida opcional */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-600/60 z-10" />

      {/* Contenido encima del video */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Climatiza tu hogar con expertos
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Instalación, mantenimiento y reparación de aire acondicionado a domicilio
        </p>
       
        <a
        href="https://wa.me/56942555908?text=Hola%20Aire%20Acondicionado"
        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Solicitar una visita
        </a>
      </div>
    </section>
  );
};

export default Hero;