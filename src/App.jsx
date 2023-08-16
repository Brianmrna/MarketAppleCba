import { Header } from "./componentes/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer"
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import CartView from "./componentes/CartView/CartView"
import Checkout from "./componentes/Checkout/Checkout"
import Footer from "./componentes/Footer/Footer"
function App() {

  return (
<CartProvider>
  <BrowserRouter>
      <Header />        
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/cart" element={ <CartView /> }/>
        <Route path="/checkout" element={ <Checkout /> }/>
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>

      <Footer /> 
  </BrowserRouter>
</CartProvider>
  )
}

export default App
