import { CartWidget } from "../CartWidget/CartWidget"
import Logo from '/MarketAppleCba-Logo.svg'
import Menu from '../Menu/Menu'
import { Link } from 'react-router-dom'

export const Header = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"className="cont__logo"><img src={Logo} alt="Logotipo" className="logo" /><p>Market Apple</p></Link>
                <CartWidget/>
                <Menu/>
            </div>
        </header>
    )
}

