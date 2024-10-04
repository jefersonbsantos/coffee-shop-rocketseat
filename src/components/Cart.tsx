interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cafés selecionados</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <span>{item.name}</span>
          <div className="flex items-center">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeItem(item.id)} className="ml-4">
              Remover
            </button>
          </div>
          <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <span>Total</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
