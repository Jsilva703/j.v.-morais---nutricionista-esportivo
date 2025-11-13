
import React from 'react';
import { 
  LogoIcon, 
  WhatsAppIcon, 
  InstagramIcon, 
  MapPinIcon, 
  WHATSAPP_LINK, 
  INSTAGRAM_LINK, 
  GOOGLE_MAPS_LINK,
  ADDRESS,
  WHATSAPP_NUMBER,
  INSTAGRAM_HANDLE
} from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <LogoIcon className="w-12 h-12 text-blue-500" />
              <div>
                <p className="text-xl font-bold text-white">J.V. Morais</p>
                <p className="text-sm">Nutricionista Esportivo</p>
              </div>
            </div>
            <p className="mt-4 text-sm max-w-xs">
              #FOGUETADA
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-white uppercase tracking-wider">Contato e Localização</h3>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 group">
              <WhatsAppIcon className="w-5 h-5 text-green-500" />
              <span className="group-hover:text-white transition-colors">{WHATSAPP_NUMBER}</span>
            </a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-2 group">
              <InstagramIcon className="w-5 h-5 text-pink-500" />
              <span className="group-hover:text-white transition-colors">@{INSTAGRAM_HANDLE}</span>
            </a>
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start justify-center md:justify-start space-x-2 group">
              <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0 text-red-500" />
              <span className="group-hover:text-white transition-colors text-sm">{ADDRESS}</span>
            </a>
          </div>

          <div className="space-y-4">
             <h3 className="font-bold text-white uppercase tracking-wider">Informações</h3>
             <p>Emito Nota Fiscal para reembolso do convênio.</p>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} J.V. Morais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;