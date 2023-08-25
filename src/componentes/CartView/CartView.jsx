import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { clases } from "../../helpers/utils"


const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito, actualizarCantidad } = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Tu carrito está vacío...</h2>
                <hr/>
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="CartView my-5">
            <h2 className="text-4xl">Tu compra</h2>
            <hr/>

            {   
                cart.map((item) => (
                    
                    <div className="producto_carrito col-10" key={item.id}>
                        { 
                        item.category.indexOf("celular") != -1 || item.category.indexOf("reloj") != -1
                            ?<img className="imgCard col-3" src={item.color[0].img} alt={item.nombre}/> 
                            :<img className="imgCard col-3" src={item.img[0]} alt={item.nombre}/>
                        }
                    
                        <h3 className="col-3">{item.nombre}</h3>
                        <p className="precio col-3">Precio: ${item.precio * item.cantidad}</p>
                        <button 
                            onClick={() => actualizarCantidad(item.id, false)} 
                            className={clases(
                                "col-1",
                                "btn",
                                "mx-2",
                                "btn-outline-primary",
                                item.cantidad === 5 && "boton-5",
                                item.cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"
                            )}
                            disabled={item.cantidad === 1}
                        >
                            -
                        </button>
                        <p className="cantidad col-1 align-self-center">{item.cantidad}</p>
                        <button 
                            
                            onClick={() => actualizarCantidad(item.id, true)}
                            className={item.cantidad === item.stock ? "btn mx-2 btn-danger col-1 align-self-center" : "align-self-center btn mx-2 btn-primary col-1"}
                            disabled={item.cantidad === item.stock}
                        >
                            +
                        </button>
                        <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger col-1 "><FaTrashAlt/></button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h4 className="text-3xl my-2">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
            </div>            
        </div>
    )
}

export default CartView