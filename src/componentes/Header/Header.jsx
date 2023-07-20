import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
import Logo from '/MarketAppleCba-Logo.svg'


export const Header = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <a href="#"className="cont__logo"><img src={Logo} alt="Logotipo" className="logo" /><p>Market Apple</p></a>
                <nav className="navbar">
                    <Link to="/" className="link__nav">Inicio</Link>
                    <Link to="/productos/celular" className="link__nav">Celulares</Link>
                    <Link to="/productos/computadora" className="link__nav">Laptops</Link>
                    <Link to="/productos/applewatch" className="link__nav">Relojes</Link>
                    <Link to="/productos/accesorios" className="link__nav">Accesorios</Link>
                </nav>
            </div>
            <CartWidget/>
        </header>
    )
}

  