import { Link } from "react-router-dom"

const ItemCard = ({item}) => { 
    return (
        <div className="card Card" >
            
            { 
                item.category.indexOf("celular") != -1 || item.category.indexOf("reloj") != -1
                    ?<img className="card-img-top" src={item.color[0].img} alt={item.nombre}/> 
                    :<img className="card-img-top" src={item.img[0]} alt={item.nombre}/>
            }
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Precio: ${item.precio}</p>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link> 
            </div>
            
        </div>
    )
}

export default ItemCard