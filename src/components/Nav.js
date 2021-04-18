import React from 'react'
import './styles/Nav.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://cdn.freebiesupply.com/logos/large/2x/nike-6-logo-black-and-white.png"
                    alt=""
                />
                <ShoppingCartIcon className="nav__cart" />
            </div>
        </div>
    )
}

export default Nav
