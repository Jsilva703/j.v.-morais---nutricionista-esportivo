
import React from 'react';
import { CheckIcon } from '../constants';

const methodItems = [
  "Avaliação Nutricional detalhada sobre sua saúde e contexto de vida.",
  "Composição corporal por bioimpedância (padrão ouro), peso e medidas.",
  "Plano alimentar prescrito durante a consulta, em conjunto com você.",
  "Acesso a um app nutricional exclusivo para acompanhar sua jornada.",
  "Suporte via WhatsApp para tirar dúvidas e acompanhar sua evolução.",
  "Emissão de Nota Fiscal para reembolso do seu convênio."
];

const Method: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wider uppercase text-white">
              O Método Para Sua <span className="text-blue-400">Transformação</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Meu método vai além de uma simples dieta. É um acompanhamento completo e profissional para garantir que você atinja seus resultados de forma segura e consistente.
            </p>
            <img 
              src="https://picsum.photos/seed/nutrition-method/600/400" 
              alt="Nutricionista em consulta" 
              className="mt-8 rounded-lg shadow-lg mx-auto w-full max-w-md lg:max-w-none"
            />
          </div>
          <div className="space-y-6">
            {methodItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-500/30 text-blue-300 rounded-full p-2">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;