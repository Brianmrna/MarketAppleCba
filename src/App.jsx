import './styles/styles.scss'
import {Header} from './componentes/Header/Header'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <div>
        <Header/>
        <ItemListContainer greeting = {'Proximamente Catalogo...'} />
      </div>
    </>
  )
}

export default App
