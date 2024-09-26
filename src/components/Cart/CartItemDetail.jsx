import { useContext } from 'react';

import Button from 'react-bootstrap/Button';

import { CartContext } from '../../context/CartContext';

export const CartItemDetail = ({ item }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.imgUrl} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text"><small className="text-body-secondary">Cantidad seleccionada: {item.quantity}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Precio total: ${item.quantity * item.price}</small></p>
                            <Button onClick={() => removeItem(item.id)}><i className="bi bi-trash3"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

