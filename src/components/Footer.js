import React from 'react'
import './styles/Footer.css'
import footerLogo from '../img/LWLogo.png'

function Footer() {
    return (
        <div className="footer">
            <img src={footerLogo} alt="" className="footer__logo" />
        </div>
    )
}

export default Footer
