import { useEffect, useState } from "react"
// import {valorDolar} from "../../helpers/valorDolar"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemListContainer = () =>{
    const dolar = 700
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    useEffect(() =>{
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where('category', "array-contains", categoryId) )
                    : productosRef
         
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
        
                    return {
                        id: doc.id,
                        ...doc.data()
                        
                    }
                })
                console.log(docs)
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
        }, [categoryId])
    return (

        <div className="catalogo__contenedor">
            {
                loading
                    ? <Loader />
                    : <ItemList productos={productos}/>
            }
        </div>

    )
}
