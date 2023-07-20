import {valorDolar} from '../../helpers/valorDolar'

const ItemDetail = ({item}) => {
    const dolar = valorDolar()
    let imgs = []
    let img = ""
    item.category.indexOf("celular") != -1
        ? imgs = Object.getOwnPropertyNames(item.color)
        : imgs = []
    img = imgs[0]
    return (
         <div className="itemDetail">
             <div className="contenedor__imagenes">
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
                
                
                    {
                        Object.getOwnPropertyNames(item.caracteristicas).map((element) => {
                            return(    
                                <div className='contenedor__detalle'>
                                    <p className='columna'>{element}</p>
                                    <p className='columna'>{item.caracteristicas[element]}</p>
                                </div>)
                        })
                    } 
                
                
            </div>
        </div> 
    )
}

export default ItemDetail