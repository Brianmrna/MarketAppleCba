import { Header } from "./componentes/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer"
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import CartView from "./componentes/CartView/CartView"
import Checkout from "./componentes/Checkout/Checkout"
import Footer from "./componentes/Footer/Footer"
import "./styles/styles.scss"
import Detallecompra from "./componentes/DetalleCompra/Detallecompra"

function App() {

  return (
<CartProvider className='CartProvider'>
  <BrowserRouter className='BrowserRouter'>
      <Header />        
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/cart" element={ <CartView /> }/>
        <Route path="/checkout" element={ <Checkout /> }/>
        <Route path="/detalleCompra/:orderId" element={<Detallecompra/>}/>
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>
  </BrowserRouter>
  
</CartProvider>
  )
}

export default App
