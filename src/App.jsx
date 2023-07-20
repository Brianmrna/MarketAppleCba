import './styles/styles.scss'
import {Header} from './componentes/Header/Header'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter , Routes , Route, Navigate } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      
        <Header/>

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>    
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>   
          <Route path="*" element={ <Navigate to="/"/> }/>
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
