import React from 'react'
import './Logo.css'
import { CiShop } from "react-icons/ci";
import logoEntero from '../../assets/img/logo-entero.png';

const Logo = () => {
    return (
        <div>
            <img src={logoEntero} alt="logo"  id='logoEntero'/>
        </div>
    )
}

export default Logo
