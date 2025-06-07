import { useState } from "react";
import { useCart } from "../contexts/CartContext";
export const Header = () => {
  const { cart } = useCart();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Minha Loja</h1>
        <div className="flex items-center space-x-2">
          <button
            className="bg-white text-blue-600 rounded-full px-3 py-1 text-sm font-semibold focus:outline-none"
            onClick={() => setShowModal(true)}
            title="Ver carrinho"
          >
            {cart.length}
          </button>
        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setShowModal(false)}
              aria-label="Fechar"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Produtos no Carrinho</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              <ul className="space-y-2">
                {cart.map((product, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div>
                      <span className="block font-medium">{product.title}</span>
                      <span className="text-green-600 text-sm">
                        R$ {product.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  )
}