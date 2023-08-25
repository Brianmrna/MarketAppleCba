import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const MenuList = ( {close} ) => {


    return (
        <nav onClick={(e) => e.stopPropagation()}  className="menulist">
            <AiOutlineCloseCircle onClick={close} className='ml-auto text-white text-4xl cursor-pointer'/>
            <Link onClick={close} to="/" className="menulist__link">Inicio</Link>
            <Link onClick={close} to="/productos/celular" className="menulist__link">Celulares</Link>
            <Link onClick={close} to="/productos/computadora" className="menulist__link">Laptops</Link>
            <Link onClick={close} to="/productos/applewatch" className="menulist__link">Relojes</Link>
            <Link onClick={close} to="/productos/accesorios" className="menulist__link">Accesorios</Link>
        </nav>
    )
}

export default MenuList