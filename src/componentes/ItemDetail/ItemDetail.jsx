// import {valorDolar} from '../../helpers/valorDolar'
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const dolar = 725
    const condition = item.category.indexOf("celular") != -1 || item.category.indexOf("reloj") != -1
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const [imagen, setImagen] = useState("")
    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
        setCantidad(1)
    }
    const handleImagen = (e) => {
        if (condition) {
            const option = item.color.find(op => op.img === e.target.value)
            setImagen(option.img)  
        }
        else{
            const option = item.img.find(op => op === e.target.value)
            setImagen(option) 
        }
        
    }

    return (
         <div className="itemDetail ">
            <div className="contenedor__imagenes">
                { 
                    condition
                        ? imagen != ""
                            ?<img className="ImagenPrincipal img-fluid" src={imagen} alt={item.color.valor}/> 
                            :<img className="ImagenPrincipal img-fluid" src={item.color[0].img} alt={item.color.valor}/>
                        : imagen != ""
                            ?<img className="ImagenPrincipal img-fluid" src={imagen} alt={item.nombre}/>
                            :<img className="ImagenPrincipal img-fluid" src={item.img[0]} alt={item.nombre}/>
                }
                <div className="selectImagen">
                {   
                    condition
                        ?item.color.map( color => <input onClick={handleImagen} value={color.img} key={color.valor} type="image" src={color.img}/>)
                        :item.img.map( img => <input onClick={handleImagen} value={img} key={img} type="image" src={img}/>)
                    
                }
                </div>
                
            </div>
            <div className="contenedor__detalle">
                <h2 className="titulo">{item.nombre}</h2>
           
                <p className="fs-5 mt-5">Precio: ${item.precio*dolar} (Pesos Argentinos)</p>
                <p className="fs-5">Precio: ${item.precio} (Dolares)</p>
                
                {
                isInCart(item.id)
                    ?  <Link className="btn btn-success mt-2 col-2" to="/cart">Terminar mi compra</Link>
                    
                    : <ItemCount 
                        className="mt-5"
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
                }
            </div>
            
            <table className="table ">
                <thead>
                    <tr>
                        <th className="Titulo">Caracteristicas</th>
                    </tr>
                </thead> 
                <tbody>
                    
                    {
                        item.caracteristicas.map(caract => {
                            return(
                            <tr key={caract.valor} className="row Detalle">
                                <th className="col-3 DetalleTitulo">{caract.valor}</th>
                                <td className="col-9 DetalleTexto">{caract.text}</td>
                            </tr>)
                    })}
                    
                </tbody>
            </table>
        </div> 
    )
}

export default ItemDetail