import { useCart } from "../contexts/CartContext";
import { products } from "../mocks/products";

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-cover"
          />
          <h2 className="mt-4 font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="mt-2 font-semibold">R$ {product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="bg-purple-500 text-white p-2 mt-4 rounded-full"
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
