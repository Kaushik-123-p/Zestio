import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Success from './pages/success/Success'
import Error from './pages/Error/Error'
import FoodGrid from './components/FoodGrid/FoodGrid'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/Protected_Routes/ProtectedRoutes'



function App() {
  const [showCart, setShowCart] = useState(false)
  const cartItems = useSelector(state => state.cart.cart)
  const totalQty = cartItems.reduce((total, item) => {
    return total + item.qty
  }, 0)
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-gray-800">
        <Navbar setShowCart={setShowCart} />
        {showCart && <Cart setShowCart={setShowCart} />}

        {
          !showCart && (<div
            className={`fixed bottom-5 right-5 bg-orange-400 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-orange-500 transition z-50 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
            onClick={() => setShowCart(true)}
          >
            <FaShoppingCart className="text-xl" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {totalQty}
            </span>
          </div>)
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<ProtectedRoutes element={<Success />} />} />
          <Route path="/foodgrid" element={<FoodGrid />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
