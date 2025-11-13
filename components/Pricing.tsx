
import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  paymentOptions: { method: string; value: string }[];
  discount?: { description: string; value: string };
  isReturn?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, paymentOptions, discount, isReturn }) => (
  <div className="bg-gray-700/50 border border-gray-600 rounded-xl p-8 flex flex-col h-full">
    <h3 className="font-anton text-3xl text-blue-400 tracking-wider uppercase">{title}</h3>
    <p className="mt-2 text-5xl font-bold">{price}</p>
    { isReturn && <p className="text-gray-400 mt-1">Realizados a cada 40-60 dias</p> }
    { !isReturn && <p className="text-gray-400 mt-1">Inclui 2 retornos no acompanhamento</p> }
    <div className="mt-8 space-y-3 flex-grow">
      <h4 className="font-semibold text-lg text-white">Formas de pagamento:</h4>
      {paymentOptions.map((opt, i) => (
        <p key={i} className="text-gray-300"><span className="font-medium text-gray-100">{opt.method}:</span> {opt.value}</p>
      ))}
    </div>
    {discount && (
      <div className="mt-8 pt-6 border-t border-gray-600">
        <h4 className="font-semibold text-lg text-green-400">DESCONTO ESPECIAL:</h4>
        <p className="text-gray-300">{discount.description}</p>
        <p className="text-3xl font-bold text-green-400 mt-1">{discount.value}</p>
      </div>
    )}
  </div>
);


const Pricing: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-anton text-4xl sm:text-5xl tracking-wider uppercase">
            Invista em <span className="text-blue-500">Você</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Transparência total nos valores. Escolha a melhor opção e comece sua jornada.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Consulta Inicial"
            price="R$ 280,00"
            paymentOptions={[
              { method: "Pix, transferência ou dinheiro", value: "R$ 270,00" },
              { method: "Cartão de débito", value: "R$ 280,00" },
              { method: "Cartão de crédito (à vista)", value: "R$ 290,00" }
            ]}
            discount={{
              description: "Pagamento no momento do agendamento (pix ou transferência):",
              value: "R$ 260,00"
            }}
          />
          <PricingCard 
            title="Retornos"
            price="R$ 200,00"
            isReturn={true}
            paymentOptions={[
              { method: "Pix, transferência ou dinheiro", value: "R$ 190,00" },
              { method: "Cartão de débito", value: "R$ 200,00" },
              { method: "Cartão de crédito", value: "R$ 210,00" }
            ]}
            discount={{
              description: "Pagamento 2 dias antes da data marcada (pix ou transferência):",
              value: "R$ 180,00"
            }}
          />
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gray-700/30 border border-gray-600 rounded-lg p-6">
            <h3 className="font-bold text-xl text-center text-amber-400">Política de Remarcação de Retorno</h3>
            <p className="mt-4 text-gray-300 text-center">
                Imprevistos acontecem. Para mantermos nossa parceria, siga a política de remarcação:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                <li><span className="font-semibold text-gray-200">Remarcação com 1 semana de antecedência:</span> Ok, sem custos.</li>
                <li><span className="font-semibold text-gray-200">Remarcação na mesma semana da consulta:</span> Será cobrado o valor de uma nova consulta na próxima.</li>
                <li><span className="font-semibold text-gray-200">Remarcação ou desmarcação no mesmo dia:</span> Tolerado apenas uma vez. Na segunda ocorrência, será agendada uma nova consulta.</li>
            </ul>
        </div>

      </div>
    </section>
  );
};

export default Pricing;