import { CartWidget } from "../CartWidget/CartWidget"
import Logo from '/MarketAppleCba-Logo.svg'
import Menu from '../Menu/Menu'

export const Header = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <a href="#"className="cont__logo"><img src={Logo} alt="Logotipo" className="logo" /><p>Market Apple</p></a>
                <CartWidget/>
                <Menu/>
            </div>
            
        </header>
    )
}

