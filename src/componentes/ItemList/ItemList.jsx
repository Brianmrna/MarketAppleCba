import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {

    return (
        <div className="contenedorCatalogo">
            <h2 className="Titulo">Productos</h2>
            <hr/>
           
           <div className='contenedor__card'>
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
           </div>
        </div>
    )
}

export default ItemList