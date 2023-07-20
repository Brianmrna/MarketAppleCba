import { Link } from "react-router-dom"

const ItemCard = ({item}) => { 
    let imgs = []
    let img = ""
    item.category.indexOf("celular") != -1
        ? imgs = Object.getOwnPropertyNames(item.color)
        : imgs = []
    img = imgs[0]
    return (
        <div className='Card'>
            <h4 className="tituloCard">{item.nombre}</h4>
            { 
                item.category.indexOf("celular") != -1
                    ?<img className="imgCard" src={item.color[img]} alt={item.nombre}/> 
                    :<img className="imgCard" src={item.img[1]} alt={item.nombre}/>
            }
            {
                item.category.indexOf("celular") != -1
                    ?<p className="precioCard">Precio: ${item.almacenamientoInterno.precioBase}</p>
                    :<p className="precioCard">Precio: ${item.precio}</p>
            }
            <Link to={`/detail/${item.id}`} className='VerMas'>Ver más</Link> 
        </div>
    )
}

export default ItemCard