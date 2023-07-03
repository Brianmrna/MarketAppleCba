import { CartWidget } from "../CartWidget/CartWidget"
import Logo from '/MarketAppleCba-Logo.svg'


export const Header = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <a href="#"className="cont__logo"><img src={Logo} alt="Logotipo" className="logo" /><p>Market Apple</p></a>
                <nav className="navbar">
                    <a href="#" className="link__nav">Inicio</a>
                    <a href="#" className="link__nav">Celulares</a>
                    <a href="#" className="link__nav">Laptops</a>
                    <a href="#" className="link__nav">Accesorios</a>
                </nav>
            </div>
            <CartWidget/>
        </header>
    )
}

  