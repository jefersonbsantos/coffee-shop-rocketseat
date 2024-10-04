import React from "react";

interface SuccessProps {
  onGoToHome: () => void;
}

const Success: React.FC<SuccessProps> = ({ onGoToHome }) => {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Uhu! Pedido confirmado</h2>
      <p className="mb-6">Aguarde, seu café chegará em breve!</p>
      <img src="/images/delivery.png" alt="Entrega" className="mx-auto mb-6" />

      <button
        onClick={onGoToHome}
        className="bg-purple-500 text-white p-2 rounded"
      >
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default Success;
