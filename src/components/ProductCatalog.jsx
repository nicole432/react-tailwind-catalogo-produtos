import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
export const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    // Substitua a URL abaixo pela URL real da sua API
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Catálogo de Produtos</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white rounded shadow flex items-center space-x-4"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <span className="font-medium block">{product.title}</span>
              <span className="text-green-600 font-semibold">
                R$ {product.price}
              </span>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};