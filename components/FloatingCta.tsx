
import React from 'react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../constants';

const FloatingCta: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center space-x-3 group"
      aria-label="Agendar consulta via WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8"/>
      <span className="hidden group-hover:block pr-2 font-semibold">Agendar Consulta</span>
    </a>
  );
};

export default FloatingCta;
