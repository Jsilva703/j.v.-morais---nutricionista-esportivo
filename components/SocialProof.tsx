
import React from 'react';

interface BeforeAfterCardProps {
  title: string;
  beforeImg: string;
  afterImg: string;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ title, beforeImg, afterImg }) => (
  <div className="bg-slate-700/60 p-4 sm:p-6 rounded-xl border border-slate-500 backdrop-blur-sm">
    <h3 className="font-anton text-2xl sm:text-3xl text-blue-400 tracking-wider uppercase mb-4 text-center">{title}</h3>
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <div>
        <img src={beforeImg} alt={`Antes - ${title}`} className="w-full h-auto object-cover rounded-lg aspect-[3/4]" />
        <p className="text-center mt-2 text-sm font-semibold text-gray-300">ANTES</p>
      </div>
      <div>
        <img src={afterImg} alt={`Depois - ${title}`} className="w-full h-auto object-cover rounded-lg aspect-[3/4]" />
        <p className="text-center mt-2 text-sm font-semibold text-green-300">DEPOIS</p>
      </div>
    </div>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl sm:text-5xl tracking-wider uppercase text-white">
            Resultados Reais <span className="text-blue-400">🚀</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Veja a transformação de alguns pacientes que confiaram no método.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BeforeAfterCard 
            title="Hipertrofia"
            beforeImg="https://picsum.photos/seed/hypertrophy-before/400/533"
            afterImg="https://picsum.photos/seed/hypertrophy-after/400/533"
          />
          <BeforeAfterCard 
            title="Emagrecimento"
            beforeImg="https://picsum.photos/seed/weightloss-before/400/533"
            afterImg="https://picsum.photos/seed/weightloss-after/400/533"
          />
          <div className="md:col-span-2 lg:col-span-1">
            <BeforeAfterCard 
              title="Desempenho / Atleta"
              beforeImg="https://picsum.photos/seed/athlete-before/400/533"
              afterImg="https://picsum.photos/seed/athlete-after/400/533"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;