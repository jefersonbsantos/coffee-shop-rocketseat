import React from "react";
import { useCart } from "../contexts/CartContext";

interface HeaderProps {
  onGoToCheckout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoToCheckout }) => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">Coffee Delivery</div>
      <div className="flex items-center">
        <span className="mr-4">Porto Alegre, RS</span>
        <button
          onClick={onGoToCheckout}
          className="bg-yellow-500 text-white p-2 rounded-full relative"
        >
          <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
          🛒
        </button>
      </div>
    </header>
  );
};

export default Header;
