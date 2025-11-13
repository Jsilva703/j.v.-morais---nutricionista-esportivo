
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-anton text-4xl sm:text-5xl text-white tracking-wider uppercase">
          Chega de procrastinar!
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          O primeiro passo é o mais importante. Agende sua consulta e vamos juntos construir a sua melhor versão.
        </p>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-200 transition-transform duration-300 hover:scale-105 shadow-lg shadow-black/20"
        >
          AGENDAR MINHA CONSULTA
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
