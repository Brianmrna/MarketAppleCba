import { Link } from "react-router-dom"

const ItemCard = ({item}) => { 
    let imgs = []
    let img = ""
    item.category.indexOf("celular") != -1
        ? imgs = Object.getOwnPropertyNames(item.color)
        : imgs = []
    img = imgs[0]
    return (
        <div className='col-3 m-2'>
            <h4>{item.nombre}</h4>
            { 
                item.category.indexOf("celular") != -1
                    ?<img src={item.color[img]} alt={item.nombre}/> 
                    :<img src={item.img[1]} alt={item.nombre}/>
            }
            {
                item.category.indexOf("celular") != -1
                    ?<p>Precio: ${item.almacenamientoInterno.precioBase}</p>
                    :<p>Precio: ${item.precio}</p>
            }
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link> 
        </div>
    )
}

export default ItemCard