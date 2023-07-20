import {valorDolar} from '../../helpers/valorDolar'
import ItemCaract from '../ItemCaract/ItemCaract'
const ItemDetail = ({item}) => {
    const dolar = valorDolar()
    let caract = Object.getOwnPropertyNames(item.caracteristicas)
    let imgs = []
    let img = ""
    item.category.indexOf("celular") != -1
        ? imgs = Object.getOwnPropertyNames(item.color)
        : imgs = []
    img = imgs[0]
    return (
         <div className="itemDetail">
            {/* <div className="contenedor__imagenes">
                { 
                    item.category.indexOf("celular") != -1
                        ?<img className="ImagenPrincipal" src={item.color[img]} alt={item.nombre}/> 
                        :<img className="ImagenPrincipal" src={item.img[1]} alt={item.nombre}/>
                }
            </div>
            <div className="contenedor__detalle">
                 <h2 className="titulo">{item.nombre}</h2>
           
                 {
                     item.category.indexOf("celular") != -1
                         ?<p>Precio: ${item.almacenamientoInterno.precioBase*dolar} (Pesos Argentinos)</p>
                         :<p>Precio: ${item.precio*dolar} (Pesos Argentinos)</p>
                 }
                 {
                     item.category.indexOf("celular") != -1
                         ?<p>Precio: ${item.almacenamientoInterno.precioBase} (Dolares)</p>
                         :<p>Precio: ${item.precio} (Dolares)</p>
                 }
                 <button className="agregarCarrito">Agregar</button>
            </div> */}
            {
                        caract.map((element) => {
                            return <ItemCaract key={item.id} el={element} prop={item.caracteristicas[element]}/>;
                        })
                    } 
        </div> 
    )
}

export default ItemDetail