import { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className=' cursor-pointer container__cart'>
            <FaShoppingCart className='ico__cart'/>
            <span className='count__cart'>{totalCantidad()}</span>
        </Link>
    )
}
