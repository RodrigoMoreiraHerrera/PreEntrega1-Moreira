import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Button from 'react-bootstrap/Button';

import { CartWidget } from './CartWidget';
import { CartContext } from '../../context/CartContext';


export const CartButton = () => {
    
    const {items} = useContext(CartContext)
    
    

    return (
        <Link to={'/cart'}>
            <Button variant="outline-primary" className='position-relative'>
                <i className="bi bi-cart"></i>
                <CartWidget widGet={items.length} />
            </Button>
        </Link>
    )
}