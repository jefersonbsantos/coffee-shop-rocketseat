import React from "react";
import { useCart } from "../contexts/CartContext";

interface CheckoutProps {
  onGoToHome: () => void;
  onGoToSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onGoToHome, onGoToSuccess }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalAmount,
  } = useCart();

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Endereço de Entrega</h2>
        <form>
          <input
            type="text"
            placeholder="CEP"
            className="border p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Rua"
            className="border p-2 w-full mb-4"
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Número"
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="border p-2 w-full mb-4"
            />
            <input
              type="text"
              placeholder="UF"
              className="border p-2 w-full mb-4"
            />
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Cafés selecionados</h2>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <span>{item.name}</span>
              <div className="flex items-center">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4"
                >
                  Remover
                </button>
              </div>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}
        <div className="flex justify-between mt-4">
          <span>Total</span>
          <span>R$ {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onGoToHome}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Voltar para a página inicial
        </button>

        <button
          onClick={onGoToSuccess}
          className="bg-green-500 text-white p-2 rounded"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default Checkout;
