
import React from 'react';
import { LogoIcon, WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-gray-800/80 backdrop-blur-md z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="w-10 h-10 text-blue-500" />
          <span className="text-xl font-bold tracking-tight">J.V. Morais</span>
        </div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base shadow-md shadow-blue-600/30"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
};

export default Header;