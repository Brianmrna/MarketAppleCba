import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const MenuList = ( {close} ) => {


    return (
        <nav onClick={(e) => e.stopPropagation()}  className="menulist bg-blue-600">
            <AiOutlineCloseCircle onClick={close} className='ml-auto text-white text-4xl cursor-pointer'/>
            <Link onClick={close} to="/" className="link__nav">Inicio</Link>
            <Link onClick={close} to="/productos/celular" className="link__nav">Celulares</Link>
            <Link onClick={close} to="/productos/computadora" className="link__nav">Laptops</Link>
            <Link onClick={close} to="/productos/applewatch" className="link__nav">Relojes</Link>
            <Link onClick={close} to="/productos/accesorios" className="link__nav">Accesorios</Link>
        </nav>
    )
}

export default MenuList