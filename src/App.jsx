import { Header } from "./components/Header"
import { ProductCatalog } from "./components/ProductCatalog"
import { CartProvider } from "./contexts/CartContext";
import (Header)
function App() {
  return (
     <CartProvider>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <Header />
          <ProductCatalog />
        </div>
      </div>
    </CartProvider>
  )
}

export default App
