import React from 'react'
import './CartWidget.css'

import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
    return (
        <div className='conteiner'>
            <button class="btn btn-danger" ><TiShoppingCart /><span>4</span></button>
            
        </div>
    )
}

export default CartWidget;
