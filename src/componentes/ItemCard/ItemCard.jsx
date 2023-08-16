import { Link } from "react-router-dom"

const ItemCard = ({item}) => { 
    console.log(item)
    return (
        <div className='Card'>
            <h4 className="tituloCard">{item.nombre}</h4>
            { 
                item.category.indexOf("celular") != -1 || item.category.indexOf("reloj") != -1
                    ?<img className="imgCard" src={item.color[0].img} alt={item.nombre}/> 
                    :<img className="imgCard" src={item.img[0]} alt={item.nombre}/>
            }
            
            <p className="precioCard">Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className='VerMas'>Ver más</Link> 
        </div>
    )
}

export default ItemCard