
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const specialities = [
  "SAÚDE E BEM-ESTAR",
  "EMAGRECIMENTO",
  "HIPERTROFIA MUSCULAR",
  "DESEMPENHO E PERFORMANCE",
  "DIETAS VEGETARIANA E VEGANA",
  "ATLETAS AMADORES E PROFISSIONAIS"
];

const Hero: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/nutritionist-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase">
          Nutricionista
        </h1>
        <h2 className="font-anton text-6xl md:text-8xl lg:text-9xl text-blue-500 tracking-wider uppercase -mt-2 md:-mt-4">
          Esportivo
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Alcance seus objetivos de saúde, performance e estética com um acompanhamento profissional e personalizado.
        </p>
        
        <div className="mt-10 max-w-3xl mx-auto">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
                {specialities.map((item, index) => (
                    <li key={index} className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 text-gray-300 text-xs md:text-sm font-semibold py-1 px-3 rounded-full">
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg shadow-blue-500/40"
        >
          QUERO TRANSFORMAR MEU CORPO
        </a>
      </div>
    </section>
  );
};

export default Hero;