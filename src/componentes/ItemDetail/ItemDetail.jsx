// import {valorDolar} from '../../helpers/valorDolar'
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    const dolar = 700
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }
    return (
         <div className="itemDetail">
            <div className="contenedor__imagenes">
                { 
                    item.category.indexOf("celular") != -1 || item.category.indexOf("reloj") != -1
                        ?<img className="ImagenPrincipal" src={item.color[0].img} alt={item.nombre}/> 
                        :<img className="ImagenPrincipal" src={item.img[0]} alt={item.nombre}/>
                }
            </div>
            <div className="contenedor__detalle">
                <h2 className="titulo">{item.nombre}</h2>
           
                <p>Precio: ${item.precio*dolar} (Pesos Argentinos)</p>
                <p>Precio: ${item.precio} (Dolares)</p>
                
                <button className="agregarCarrito">Agregar</button>
                
                
            </div>
            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                    : <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }
        </div> 
    )
}

export default ItemDetail