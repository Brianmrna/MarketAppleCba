import './styles/styles.scss'
import {Header} from './componentes/Header/Header'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter , Routes , Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      
        <Header/>

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting = {'Proximamente Catalogo...'} /> } />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
