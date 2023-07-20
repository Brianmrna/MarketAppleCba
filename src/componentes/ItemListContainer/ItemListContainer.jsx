import { useEffect, useState } from "react"
import {valorDolar} from "../../helpers/valorDolar"
import ItemList from '../ItemList/ItemList'
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'

export const ItemListContainer = () =>{
    const dolar = valorDolar()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    useEffect(() =>{
        setLoading(true)

        pedirDatos()
            .then(r => {
                if (categoryId) {
                    console.log(categoryId)
                    setProductos( r.filter(prod => prod.category.indexOf(categoryId) != -1) )
                    console.log(productos)
                } else {
                    setProductos(r)
                }
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])
    return (
    
        <div className="catalogo__contenedor">
            {
                loading
                    ? <h2 className="cargando">Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </div>
    
    )
}
