import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {

    return (
        <div className="">
            <h2 className="">Productos</h2>
            <hr/>
           
           <div className=''>
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
           </div>
        </div>
    )
}

export default ItemList